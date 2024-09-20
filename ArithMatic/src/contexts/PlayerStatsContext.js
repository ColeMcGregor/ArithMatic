import React, { createContext, useState, useMemo } from 'react';

// Define the possible types to track stats by
const possibleTypes = ['addition', 'subtraction', 'multiplication', 'division', 'exponents', 'roots', 'logarithms', 'modulus'];

export const PlayerStatsContext = createContext();

export const PlayerStatsProvider = ({ children }) => {
    const [playerStats, setPlayerStats] = useState({
        timeTaken: 0, // Total time taken
        correct: 0, // Total correct answers
        incorrect: 0, // Total incorrect answers
        breakdown: possibleTypes.reduce((acc, type) => {acc[type] = { correct: 0, incorrect: 0 }; //acc means 
            return acc;
            /**
             * .reduce is a method that takes a callback function and an initial value, and returns a single value
             * acc: accumulator, it is the object that is being built up(a sum)
             * type: the current type we are looking at(the name or key)
             * 
             * returns the break down shaped like this:
             * {
             *  addition: { correct: 0, incorrect: 0 },
             *  subtraction: { correct: 0, incorrect: 0 },
             *  multiplication: { correct: 0, incorrect: 0 },
             *  division: { correct: 0, incorrect: 0 },
             *  exponents: { correct: 0, incorrect: 0 },
             *  roots: { correct: 0, incorrect: 0 },
             *  logarithms: { correct: 0, incorrect: 0 },
             *  modulus: { correct: 0, incorrect: 0 }
             * }
             */
        }, {}), // Breakdown of stats by type (correct and incorrect for each type)
    });

    /**
     * Update the player stats for a given question type
     * @param {string} type - The question type (e.g., 'addition', 'multiplication')
     * @param {boolean} correct - Whether the answer was correct or not
     * @param {number} time - The time taken to answer the question
     */
    const updateStats = (type, correct, time) => {
        setPlayerStats((prevStats) => {
            //new stats is a copy of the previous stats
            const newStats = { ...prevStats };
            //if the answer is correct, add 1 to the correct count, otherwise add 0
            newStats.correct += correct ? 1 : 0;
            //if the answer is incorrect, add 1 to the incorrect count, otherwise add 0
            newStats.incorrect += correct ? 0 : 1;
            //add 1 to the correct or incorrect count for the given type, which is a key in the breakdown object, made with .reduce up there
            newStats.breakdown[type][correct ? 'correct' : 'incorrect'] += 1;
            //return the new stats
            return newStats;
        });
    };

    /** Memoize the value to avoid unnecessary re-renders
     * Memoization is a technique where you store the results of expensive function calls and return the cached result when the same inputs occur again.
     * useMemo is a hook that allows you to memoize a value
     * memos help with performance optimization by preventing unnecessary re-renders
     * 
     * we want to memoize the playerStats and updateStats functions because they are being used in the render cycle
     * 
     */

    const value = useMemo(() => ({
        playerStats,
        updateStats,
    }), [playerStats]);

    return (
        <PlayerStatsContext.Provider value={value}>
            {children}
        </PlayerStatsContext.Provider>
    );
};
