import React from 'react';
import QuestionCard from './QuestionCard';

/**
 * Factory function to generate an array of QuestionCards based on game settings.
 * The number of cards depends on whether the mode is 'count' or 'time'.
 * 
 * @param {object} gameSettings - The settings for the game, including selected question types, significant figures, and mode.
 * @returns {Array<QuestionCard>} - An array of newly generated QuestionCards.
 */
export const createQuestionCards = (gameSettings) => {
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
    cards.push(createQuestionCard(gameSettings));
}

return cards;
    };

/**
 * Factory function to generate a fresh QuestionCard based on game settings.
 * 
 * @param {object} gameSettings - The settings for the game, including selected question types, significant figures, and decimal options.
 * @returns {QuestionCard} - A newly generated QuestionCard.
 */
const createQuestionCard = (gameSettings) => {
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
    // case 'logic':
    // [question, correctAnswer, possibleAnswers] = createLogicQuestion();
    // break;
    default:
    break;
}
//parse the question to english
//const questionEnglish = parseQuestionToEnglish(question, significantFigures, decimal);

// Return a new QuestionCard instance with the generated question data and its type
return new QuestionCard(question, questionEnglish, possibleAnswers, correctAnswer, questionType);
};
/** Static factory method to restore an QuestionCard from JSON data.
 * This will typically be used when loading cards from AsyncStorage or other storage systems.
 * @param {object} data - The JSON object representing the stored QuestionCard.
 * @returns {QuestionCard} - A fully restored QuestionCard instance.
 */
export const restoreQuestionCardFromJSON = (data) => {
return  QuestionCard.fromJSON(data);
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

// const createLogicQuestion = () => {
//     //check against the propositional logic rules

// };


// Utility functions to generate random numbers and possible answers

const generateRandomNumber = (significantFigures, decimal) => {
    //generate the factor, using math.pow and the significatn figures, giving me a val that starts with 1 and has zeros following
    const factor = Math.pow(10, significantFigures);
    //make the number by multiplying the factor by a random number between 0 and 1, then rounding it to the nearest whole number
    let number = Math.round(Math.random() * factor);
    //if decimal is true, then lets get a decimal from it
    if (decimal) {
        return (number / factor).toFixed(significantFigures);
    }
    return number;
};

const generatePossibleAnswers = (correctAnswer) => {
    const possibleAnswers = [correctAnswer];
    while (possibleAnswers.length < 4) {
        //generate a wrong answer
        const wrongAnswer = generateRandomNumber(significantFigures, decimal);
        //make sure the wrong answer is not already in the possible answers, correct or incorrect
        if (!possibleAnswers.includes(wrongAnswer)) {
            //push the wrong answer into the possible answers
            possibleAnswers.push(wrongAnswer);
        }
    }
    return possibleAnswers;
};

/**
 * Parse the question to English
 * 
 * this will take in the question and return the question in English form
 * to do this we will need to parse the question into an expression tree
 * and then we will need to traverse the tree and convert it to an english expression
 * we will need to handle the operators, and the operands
 * we will need to handle the numbers and the variables
 * we will need to handle the exponents
 * we will need to handle the roots
 * we will need to handle the logarithms
 * we will need to handle the logic operators
 * it will be built in a way that we can add more operators and operands in the future
 * as well as handle multiple variables, numbers, operators, and parentheses
 * 
 * @param {string} question - The question to parse to English
 * @returns {string} - The question in English
 */
const parseQuestionToEnglish = (question, significantFigures, decimal) => {
/** first we will break question into its individual tokens
*  we have to check for numbers, and can use significant figures to know how many digits to expect
*  we will need to handle the operators, and the operands
*  we will need to handle the exponents
*  we will need to handle the roots
*  we will need to handle the logarithms
*  we will need to handle the logic operators
*  it will be built in a way that we can add more operators and operands in the future
*  as well as handle multiple variables, numbers, operators, and parentheses

//split the question into tokens
const tokens = question.split('');
    

*/
};

/** for logic questions
const andSymbol = '∧';
const orSymbol = '∨';
const notSymbol = '¬';
const impliesSymbol = '→';
 */


