import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const assistantId = process.env.ASSISTANT_ID;

export async function POST(request: Request) {
  try {
    const { message, threadId: existingThreadId } = await request.json();

    if (!assistantId) {
      throw new Error("ASSISTANT_ID is not set in environment variables.");
    }

    // Create a new thread if one doesn't exist
    const threadId = existingThreadId || (await openai.beta.threads.create()).id;

    // Add the user's message to the thread
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    // Create a run to get the assistant's response
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    // Wait for the run to complete
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    while (runStatus.status !== 'completed') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Poll every 500ms
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

      if (['failed', 'cancelled', 'expired'].includes(runStatus.status)) {
        throw new Error(`Run failed with status: ${runStatus.status}`);
      }
    }

    // Get the latest messages from the thread
    const messages = await openai.beta.threads.messages.list(threadId);
    const assistantMessage = messages.data.find(m => m.run_id === run.id && m.role === 'assistant');

    if (assistantMessage && assistantMessage.content[0].type === 'text') {
      return NextResponse.json({
        response: assistantMessage.content[0].text.value,
        threadId: threadId,
      });
    } else {
      return NextResponse.json({
        response: "I couldn't get a response. Please try again.",
        threadId: threadId,
      });
    }

  } catch (error) {
    console.error('Error in chat API:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return NextResponse.json(
      { error: `API Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}