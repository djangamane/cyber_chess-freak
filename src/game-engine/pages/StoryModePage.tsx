import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CHAPTERS, Chapter } from '../data/chapters';
import ChapterCard from '../components/ChapterCard';
import './StoryModePage.css';

export default function StoryModePage() {
    const navigate = useNavigate();
    const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

    const handleChapterSelect = (chapter: Chapter) => {
        setSelectedChapter(chapter);
    };

    const handleStartChapter = () => {
        if (selectedChapter) {
            // Navigate to game with chapter context
            navigate('/game', {
                state: {
                    mode: 'story',
                    chapter: selectedChapter
                }
            });
        }
    };

    const handleCloseModal = () => {
        setSelectedChapter(null);
    };

    const completedCount = CHAPTERS.filter(c => c.completed).length;
    const progressPercent = (completedCount / CHAPTERS.length) * 100;

    return (
        <div className="story-mode-page">
            {/* Header */}
            <div className="story-header">
                <h1 className="story-title">STORY MODE</h1>
                <p className="story-subtitle">
                    Checkmate systemic racism through knowledge and strategy
                </p>

                {/* Progress bar */}
                <div className="progress-section">
                    <div className="progress-label">
                        <span>REVOLUTION PROGRESS</span>
                        <span>{completedCount} / {CHAPTERS.length} CHAPTERS</span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Premium notice */}
            <div className="premium-notice">
                <span className="premium-icon">⭐</span>
                <span>Story Mode is a premium feature. </span>
                <button className="unlock-button">Unlock All Chapters - $9.99</button>
            </div>

            {/* Chapter grid */}
            <div className="chapters-grid">
                {CHAPTERS.map((chapter) => (
                    <ChapterCard
                        key={chapter.id}
                        chapter={chapter}
                        onSelect={handleChapterSelect}
                    />
                ))}
            </div>

            {/* Chapter detail modal */}
            {selectedChapter && (
                <div className="chapter-modal-overlay" onClick={handleCloseModal}>
                    <div className="chapter-modal" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>×</button>

                        <div className="modal-header">
                            <span className="modal-chapter-num">CHAPTER {selectedChapter.number}</span>
                            <h2 className="modal-title">{selectedChapter.title}</h2>
                        </div>

                        <div className="modal-opponent">
                            <div className="modal-avatar">
                                {selectedChapter.opponent.name.charAt(0)}
                            </div>
                            <div>
                                <div className="modal-opponent-name">{selectedChapter.opponent.name}</div>
                                <div className="modal-opponent-represents">{selectedChapter.opponent.represents}</div>
                            </div>
                        </div>

                        <p className="modal-description">{selectedChapter.opponent.description}</p>

                        <div className="modal-research">
                            <h4>Based on Research:</h4>
                            <p>{selectedChapter.researchPaper.name}</p>
                            {selectedChapter.researchPaper.citation && (
                                <p className="citation">{selectedChapter.researchPaper.citation}</p>
                            )}
                        </div>

                        <div className="modal-reward">
                            <span className="reward-icon">{selectedChapter.reward.badge}</span>
                            <div>
                                <div className="reward-label">VICTORY REWARD</div>
                                <div className="reward-title">{selectedChapter.reward.title}</div>
                            </div>
                        </div>

                        <button className="start-chapter-button" onClick={handleStartChapter}>
                            ⚔️ BEGIN CHAPTER
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
