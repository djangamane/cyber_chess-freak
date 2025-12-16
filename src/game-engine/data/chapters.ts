// Story Mode Chapter Data
// Each chapter represents one research paper with a themed AI opponent

export interface Chapter {
    id: string;
    number: number;
    title: string;
    researchPaper: {
        name: string;
        citation?: string;
        doi?: string;
    };
    opponent: {
        name: string;
        description: string;
        represents: string;
        difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'master';
        avatar?: string; // Path to opponent image
    };
    reward: {
        badge: string;
        title: string;
    };
    unlocked: boolean;
    completed: boolean;
    questions: QuizQuestion[];
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
}

export const CHAPTERS: Chapter[] = [
    {
        id: 'chapter-1',
        number: 1,
        title: 'Game Theory in Action',
        researchPaper: {
            name: 'Game Theory in Action: Exploring Planetary Chess as a Tool for Social Change',
            citation: 'International Journal of Game Theory and Technology (IJGTT), Vol.10, No.2, June 2024',
            doi: '10.5121/ijgtt.2024.10201',
        },
        opponent: {
            name: 'The Theorist',
            description: 'An academic figure who dismisses systemic issues as mere theory, not reality.',
            represents: 'Ignorance & Denial',
            difficulty: 'easy',
        },
        reward: {
            badge: '🎓',
            title: 'Revolutionary Rookie',
        },
        unlocked: true, // First chapter is always unlocked
        completed: false,
        questions: [], // Will be populated from user's AI tool
    },
    {
        id: 'chapter-2',
        number: 2,
        title: 'The Lines That Divide',
        researchPaper: {
            name: 'Research Paper #2', // User will provide
        },
        opponent: {
            name: 'The Redliner',
            description: 'A cold, calculating banker from the 1950s who draws invisible lines to segregate communities.',
            represents: 'Housing Discrimination',
            difficulty: 'medium',
        },
        reward: {
            badge: '🏠',
            title: 'Community Defender',
        },
        unlocked: false,
        completed: false,
        questions: [],
    },
    {
        id: 'chapter-3',
        number: 3,
        title: 'Breaking Barriers',
        researchPaper: {
            name: 'Research Paper #3', // User will provide
        },
        opponent: {
            name: 'The Gatekeeper',
            description: 'A bureaucrat who blocks access to opportunities through endless rules and "policies".',
            represents: 'Institutional Barriers',
            difficulty: 'hard',
        },
        reward: {
            badge: '🚪',
            title: 'Barrier Breaker',
        },
        unlocked: false,
        completed: false,
        questions: [],
    },
    {
        id: 'chapter-4',
        number: 4,
        title: 'Follow the Money',
        researchPaper: {
            name: 'Research Paper #4', // User will provide
        },
        opponent: {
            name: 'The Lobbyist',
            description: 'A shadowy figure who manipulates policy for profit, keeping the system rigged.',
            represents: 'Political Manipulation',
            difficulty: 'expert',
        },
        reward: {
            badge: '💰',
            title: 'Truth Seeker',
        },
        unlocked: false,
        completed: false,
        questions: [],
    },
    {
        id: 'chapter-5',
        number: 5,
        title: 'The Revolution',
        researchPaper: {
            name: 'Research Paper #5', // User will provide
        },
        opponent: {
            name: 'The Architect',
            description: 'The mastermind behind the system itself. Defeat them, and the revolution begins.',
            represents: 'The Root Cause',
            difficulty: 'master',
        },
        reward: {
            badge: '👑',
            title: 'Revolutionary Leader',
        },
        unlocked: false,
        completed: false,
        questions: [],
    },
];

// Difficulty settings for each level
export const DIFFICULTY_SETTINGS = {
    easy: { stockfishLevel: 1, movesPerQuestion: 5 },
    medium: { stockfishLevel: 3, movesPerQuestion: 4 },
    hard: { stockfishLevel: 5, movesPerQuestion: 3 },
    expert: { stockfishLevel: 7, movesPerQuestion: 2 },
    master: { stockfishLevel: 10, movesPerQuestion: 2 },
};
