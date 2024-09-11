//the context file for the Arithmetic Games
//holds the state and functions for the game state
import React, { createContext, useState } from 'react';

//create the context
export const GameContext = createContext();

//create the provider
export const GameProvider = ({ children }) => {
    const [gameSettings, setGameSettings] = useState({
        time: 30,
        significantFigures: 2,
        decimal: false,
        selectTypes: ['addition', 'subtraction', 
                      'multiplication', 'division', 
                      'exponents', 'roots',
                      'logarithms', 'modulus'],
        });

        const [playerStats, setPlayerStats] = useState({
            correct: 0,
            incorrect: 0,
            breakdown: { 
                addition: { correct: 0, incorrect: 0 },
                subtraction: { correct: 0, incorrect: 0 },
                multiplication: { correct: 0, incorrect: 0 },
                division: { correct: 0, incorrect: 0 },
                exponents: { correct: 0, incorrect: 0 },
                roots: { correct: 0, incorrect: 0 },
                logarithms: { correct: 0, incorrect: 0 },
                modulus: { correct: 0, incorrect: 0 },
            },
            });

        const updateStats = (type, correct) => {
            const newStats = { ...playerStats };
            if (correct) {
                newStats.correct += 1;
                newStats.breakdown[type].correct += 1;
            } else {
                newStats.incorrect += 1;
                newStats.breakdown[type].incorrect += 1;
            }
            setPlayerStats(newStats);
        };
        return (
            <GameContext.Provider value={{ gameSettings, setGameSettings, playerStats, updateStats }}>
                {children}
            </GameContext.Provider>
        );
    };