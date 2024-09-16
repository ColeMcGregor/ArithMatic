import React from 'react';
import ArithmeticCard from './ArithmeticCard';

/**
 * Factory function to generate an array of ArithmeticCards based on game settings.
 * The number of cards depends on whether the mode is 'count' or 'time'.
 * 
 * @param {object} gameSettings - The settings for the game, including selected question types, significant figures, and mode.
 * @returns {Array<ArithmeticCard>} - An array of newly generated ArithmeticCards.
 */
export const createArithmeticCards = (gameSettings) => {
const { mode, questions, time } = gameSettings;
let numberOfCards;

// Determine how many cards to generate
if (mode === 'count') {
    // Generate cards equal to the questions field, testing how fast you can do them
    numberOfCards = questions;  
} else if (mode === 'time') {
    // Generate cards equal to the time field, becuase if you can do more than one question per second, you are cheating, or dont need this app
    numberOfCards = time;  
} else {
    throw new Error('Invalid mode in game settings');
}

// Generate the specified number of cards
const cards = [];
for (let i = 0; i < numberOfCards; i++) {
    cards.push(createArithmeticCard(gameSettings));
}

return cards;
    };

/**
 * Factory function to generate a fresh ArithmeticCard based on game settings.
 * 
 * @param {object} gameSettings - The settings for the game, including selected question types, significant figures, and decimal options.
 * @returns {ArithmeticCard} - A newly generated ArithmeticCard.
 */
const createArithmeticCard = (gameSettings) => {
const { selectTypes, significantFigures, decimal } = gameSettings;

// Randomly select a question type
const questionType = selectTypes[Math.floor(Math.random() * selectTypes.length)];

// Variables to store the question details
let question = '';
let correctAnswer = null;
let possibleAnswers = [];

switch (questionType) {
    case 'addition':
    [question, correctAnswer, possibleAnswers] = createAdditionQuestion(significantFigures, decimal);
    break;
    case 'subtraction':
    [question, correctAnswer, possibleAnswers] = createSubtractionQuestion(significantFigures, decimal);
    break;
    case 'multiplication':
    [question, correctAnswer, possibleAnswers] = createMultiplicationQuestion(significantFigures, decimal);
    break;
    case 'division':
    [question, correctAnswer, possibleAnswers] = createDivisionQuestion(significantFigures, decimal);
    break;
    case 'modulus':
    [question, correctAnswer, possibleAnswers] = createModulusQuestion(significantFigures, decimal);
    break;
    //extra hard ones(maybe premium)
    case 'exponentiation':
    [question, correctAnswer, possibleAnswers] = createExponentiationQuestion(significantFigures, decimal);
    break;
    case 'root':
    [question, correctAnswer, possibleAnswers] = createRootQuestion(significantFigures, decimal);
    break;
    case 'logarithm':
    [question, correctAnswer, possibleAnswers] = createLogarithmQuestion(significantFigures, decimal);
    break;
    default:
    break;
}

// Return a new ArithmeticCard instance with the generated question data and its type
return new ArithmeticCard(question, possibleAnswers, correctAnswer, questionType);
};

/**
 * Static factory method to restore an ArithmeticCard from JSON data.
 * This will typically be used when loading cards from AsyncStorage or other storage systems.
 * @param {object} data - The JSON object representing the stored ArithmeticCard.
 * @returns {ArithmeticCard} - A fully restored ArithmeticCard instance.
 */
export const restoreArithmeticCardFromJSON = (data) => {
return ArithmeticCard.fromJSON(data);
};

// Helper functions to generate specific types of questions

const createAdditionQuestion = (significantFigures, decimal) => {
const num1 = generateRandomNumber(significantFigures, decimal);
const num2 = generateRandomNumber(significantFigures, decimal);
const question = `${num1} + ${num2}`;
const correctAnswer = num1 + num2;
const possibleAnswers = generatePossibleAnswers(correctAnswer);
return [question, correctAnswer, possibleAnswers];
};

const createSubtractionQuestion = (significantFigures, decimal) => {
const num1 = generateRandomNumber(significantFigures, decimal);
const num2 = generateRandomNumber(significantFigures, decimal);
const question = `${num1} - ${num2}`;
const correctAnswer = num1 - num2;
const possibleAnswers = generatePossibleAnswers(correctAnswer);
return [question, correctAnswer, possibleAnswers];
};

const createMultiplicationQuestion = (significantFigures, decimal) => {
const num1 = generateRandomNumber(significantFigures, decimal);
const num2 = generateRandomNumber(significantFigures, decimal);
const question = `${num1} * ${num2}`;
const correctAnswer = num1 * num2;
const possibleAnswers = generatePossibleAnswers(correctAnswer);
return [question, correctAnswer, possibleAnswers];
};

const createDivisionQuestion = (significantFigures, decimal) => {
const num1 = generateRandomNumber(significantFigures, decimal);
const num2 = generateRandomNumber(significantFigures, decimal);
const question = `${num1} / ${num2}`;
const correctAnswer = num1 / num2;
const possibleAnswers = generatePossibleAnswers(correctAnswer);
return [question, correctAnswer, possibleAnswers];
};

const createModulusQuestion = (significantFigures, decimal) => {
const num1 = generateRandomNumber(significantFigures, decimal);
const num2 = generateRandomNumber(significantFigures, decimal);
const question = `${num1} mod(%) ${num2}`;
const correctAnswer = num1 % num2;
const possibleAnswers = generatePossibleAnswers(correctAnswer);
return [question, correctAnswer, possibleAnswers];
};

//extra hard ones
const createExponentiationQuestion = (significantFigures, decimal) => {
    const base = generateRandomNumber(significantFigures, decimal);
    const exponent = generateRandomNumber(significantFigures, decimal);
    const question = `${base} ^ ${exponent}`;
    const correctAnswer = Math.pow(base, exponent);
    const possibleAnswers = generatePossibleAnswers(correctAnswer);
    return [question, correctAnswer, possibleAnswers];
};

const createRootQuestion = (significantFigures, decimal) => {   
    const radicand = generateRandomNumber(significantFigures, decimal);
    const index = generateRandomNumber(significantFigures, decimal);
    const question = `nth root of ${radicand}`;
    const correctAnswer = Math.pow(radicand, 1/index);
    const possibleAnswers = generatePossibleAnswers(correctAnswer);
    return [question, correctAnswer, possibleAnswers];
};  

const createLogarithmQuestion = (significantFigures, decimal) => {
    const base = generateRandomNumber(significantFigures, decimal);
    const argument = generateRandomNumber(significantFigures, decimal);
    const question = `log base ${base} of ${argument}`;
    const correctAnswer = Math.log(argument) / Math.log(base);
    const possibleAnswers = generatePossibleAnswers(correctAnswer);
    return [question, correctAnswer, possibleAnswers];
};


// Utility functions to generate random numbers and possible answers

const generateRandomNumber = (significantFigures, decimal) => {
const factor = Math.pow(10, significantFigures);
let number = Math.round(Math.random() * factor);
if (decimal) {
    return (number / factor).toFixed(significantFigures);
}
return number;
};

const generatePossibleAnswers = (correctAnswer) => {
const possibleAnswers = [correctAnswer];
while (possibleAnswers.length < 4) {
    const wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
    if (!possibleAnswers.includes(wrongAnswer)) {
    possibleAnswers.push(wrongAnswer);
    }
}
return possibleAnswers.sort(() => Math.random() - 0.5);
};


/** for logic questions
const andSymbol = '∧';
const orSymbol = '∨';
const notSymbol = '¬';
const impliesSymbol = '→';
 */
