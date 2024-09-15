import React from 'react';

/**
 * ArithmeticCard is a class that represents a single arithmetic card
 * it will be used in the GameScreen to display a single card
 * it will store the question, possible answers, correct answer, and the time taken to answer
 * it will also store the startTime and endTime of the card
 * it will have a method to check if the answer is correct
 * it will have a method to convert the card to a JSON format for storage
 * it will have a static method to restore the card from a JSON format
 */

class ArithmeticCard {
  #question;
  #possibleAnswers;
  #correctAnswer;
  #answeredCorrectly = false;
  #startTimeValue = null;
  #endTimeValue = null;
  #timeTaken = null;
  #type = ''; // New field to store the question type

  /**
   * Constructor handles both fresh generation and loading from storage.
   * @param {string} question - The question text.
   * @param {array} possibleAnswers - An array of possible answers.
   * @param {number} correctAnswer - The correct answer.
   * @param {string} type - The type of arithmetic question (e.g., 'addition').
   * @param {object} data - Optional JSON data for restoring the card from storage.
   */
  constructor(question, possibleAnswers, correctAnswer, type = '', data = null) {
    if (data) {
      // Restore from data (AsyncStorage or other sources)
      this.#question = data.question;
      this.#possibleAnswers = data.possibleAnswers;
      this.#correctAnswer = data.correctAnswer;
      this.#answeredCorrectly = data.answeredCorrectly;
      this.#timeTaken = data.timeTaken;
      this.#type = data.type;
    } else {
      // Fresh card creation
      this.#question = question;
      this.#possibleAnswers = possibleAnswers;
      this.#correctAnswer = correctAnswer;
      this.#type = type;
    }
  }
  //getters
  // Getter for question type
  getType() {
    return this.#type;
  }
  getQuestion() {
    return this.#question;
  }
  getPossibleAnswers() {
    return this.#possibleAnswers;
  }
  getCorrectAnswer() {
    return this.#correctAnswer;
  }
  getAnsweredCorrectly() {
    return this.#answeredCorrectly;
  }
  getTimeTaken() {
    return this.#timeTaken;
  }
  
  

  // Convert to JSON-friendly format for AsyncStorage
  toJSON() {
    return {
      question: this.#question,
      possibleAnswers: this.#possibleAnswers,
      correctAnswer: this.#correctAnswer,
      answeredCorrectly: this.#answeredCorrectly,
      timeTaken: this.#timeTaken,
      type: this.#type, // Include type in JSON
    };
  }

  // Static method to restore from JSON
  static fromJSON(data) {
    return new ArithmeticCard(null, null, null, '', data);
  }
}

export default ArithmeticCard;
