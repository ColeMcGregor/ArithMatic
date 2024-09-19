import React, { createContext, useState, useMemo } from 'react';

// Define possible question types (for the Options screen)
const possibleTypes = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponents', 'Roots', 'Logarithms', 'Modulus'];
const possibleDifficulties = ['Custom', 'Easy', 'Medium', 'Hard', 'Genius'];

export const GameSettingsContext = createContext();

export const GameSettingsProvider = ({ children }) => {
    const [gameSettings, setGameSettings] = useState({
        time: 30, // Total time for timed mode
        questions: 5, // Number of questions for question-count mode
        significantFigures: 1, // Number of significant figures
        decimal: false, // Whether to include decimals
        mode: 'count', // 'count' or 'time'
        selectTypes: ['addition'], // Initially selected types
        difficulty: 'easy', // Difficulty of the game
    });

    // Memoize the value to avoid unnecessary re-renders
    const value = useMemo(() => ({
        gameSettings,
        setGameSettings,
        possibleTypes, // Available question types
        possibleDifficulties, // Available difficulties
    }), [gameSettings]);

    return (
        <GameSettingsContext.Provider value={value}>
            {children}
        </GameSettingsContext.Provider>
    );
};
