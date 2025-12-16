import React from 'react';
import { Chapter, DIFFICULTY_SETTINGS } from '../data/chapters';
import './ChapterCard.css';

interface ChapterCardProps {
    chapter: Chapter;
    onSelect: (chapter: Chapter) => void;
}

export default function ChapterCard({ chapter, onSelect }: ChapterCardProps) {
    const difficultyColors = {
        easy: '#00ff00',
        medium: '#00ffff',
        hard: '#ffaa00',
        expert: '#ff6600',
        master: '#ff0066',
    };

    const handleClick = () => {
        if (chapter.unlocked) {
            onSelect(chapter);
        }
    };

    return (
        <div
            className={`chapter-card ${chapter.unlocked ? 'unlocked' : 'locked'} ${chapter.completed ? 'completed' : ''}`}
            onClick={handleClick}
        >
            {/* Lock overlay for locked chapters */}
            {!chapter.unlocked && (
                <div className="lock-overlay">
                    <span className="lock-icon">🔒</span>
                    <span className="lock-text">Complete previous chapter to unlock</span>
                </div>
            )}

            {/* Completed badge */}
            {chapter.completed && (
                <div className="completed-badge">
                    <span>✓ COMPLETED</span>
                </div>
            )}

            {/* Chapter header */}
            <div className="chapter-header">
                <span className="chapter-number">CHAPTER {chapter.number}</span>
                <span
                    className="difficulty-badge"
                    style={{ backgroundColor: difficultyColors[chapter.opponent.difficulty] }}
                >
                    {chapter.opponent.difficulty.toUpperCase()}
                </span>
            </div>

            {/* Chapter title */}
            <h3 className="chapter-title">{chapter.title}</h3>

            {/* Opponent info */}
            <div className="opponent-section">
                <div className="opponent-avatar">
                    {chapter.opponent.avatar ? (
                        <img src={chapter.opponent.avatar} alt={chapter.opponent.name} />
                    ) : (
                        <div className="avatar-placeholder">
                            {chapter.opponent.name.charAt(0)}
                        </div>
                    )}
                </div>
                <div className="opponent-info">
                    <div className="opponent-name">{chapter.opponent.name}</div>
                    <div className="opponent-represents">{chapter.opponent.represents}</div>
                </div>
            </div>

            {/* Description */}
            <p className="opponent-description">{chapter.opponent.description}</p>

            {/* Research paper reference */}
            <div className="research-reference">
                <span className="research-icon">📄</span>
                <span className="research-name">{chapter.researchPaper.name}</span>
            </div>

            {/* Reward preview */}
            <div className="reward-section">
                <span className="reward-badge">{chapter.reward.badge}</span>
                <span className="reward-title">{chapter.reward.title}</span>
            </div>

            {/* Play button */}
            {chapter.unlocked && !chapter.completed && (
                <button className="play-button">
                    ▶ ENGAGE OPPONENT
                </button>
            )}

            {chapter.completed && (
                <button className="replay-button">
                    ↻ REPLAY CHAPTER
                </button>
            )}
        </div>
    );
}
