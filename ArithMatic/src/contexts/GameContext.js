//the context file for the Arithmetic Games
//holds the state and functions for the game state
import React, { createContext, useState } from 'react';

//create the context
export const GameContext = createContext();
export const [possibleTypes] = ['addition', 'subtraction', 
                                'multiplication', 'division', 
                                'exponents', 'roots',
                                'logarithms', 'modulus'];

//create the provider
export const GameProvider = ({ children }) => {
    //possibleTypes[] holds all the allowable kinds of questions
    

    /**
     * gameSettings is an object that holds the settings for the game
     * it has the settings for the current round that will be loaded
     * game is loaded if Go button is used in HomeScreen or Start button in options
     * will have time and count , used depending on the mode setting. 
     * has significant figures as part of the difficulty settings
     * has parentheses as a setting
     * has a decimal option for increased difficulty
     * has a mode foer count or time style play
     * has a current selected types array for loading the kinds of questions
     * 
     */
    const [gameSettings, setGameSettings] = useState({
        time: 30,
        questions: 5,
        significantFigures: 1,
        parentheses: false,
        decimal: false,
        mode: 'count',
        selectTypes: ['addition'],
        });
    /**
     * playerStats holds how well the player has done so far this round
     * this info will be saved to Async storage to be viewable later
     * has the total correct, as well as the correct for each subtype
     */
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
    /**
     * 
     */
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