"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { store } from './store/index';

// Import styles
import './index.css';
import './App.css';

// Import components directly instead of lazy loading for Next.js compatibility
import GamePage from './pages/GamePage';
import WelcomeScreen from './components/WelcomeScreen';
import Leaderboard from './components/Leaderboard';
import UserProfilePage from './pages/UserProfilePage';
import UserSettings from './pages/UserSettings';
import StoryModePage from './pages/StoryModePage';
import SimpleDesktopLayout from './components/layout/SimpleDesktopLayout';

function GameRouter() {
    const [currentPage, setCurrentPage] = React.useState('game');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
    };

    return (
        <SimpleDesktopLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/story" element={<StoryModePage />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/settings" element={<UserSettings />} />
            </Routes>
        </SimpleDesktopLayout>
    );
}

export default function GameEntry() {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={['/game']}>
                <GameRouter />
            </MemoryRouter>
        </Provider>
    );
}
