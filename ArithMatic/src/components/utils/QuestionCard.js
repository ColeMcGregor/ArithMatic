import React from 'react';

/**
 * ArithmeticCard is a class that represents a single arithmetic card.
 * It will be used in the GameScreen to display a single card.
 * It will store the question, possible answers, correct answer, and the time taken to answer.
 * It will also store the startTime and endTime of the card.
 * It will have a method to check if the answer is correct.
 * It will have a method to convert the card to a JSON format for storage.
 * It will have a static method to restore the card from a JSON format.
 */

class QuestionCard {
  #question;
  #questionEnglish;
  #possibleAnswers;
  #correctAnswer;
  #answeredCorrectly = false;
  #startTimeValue = null;
  #endTimeValue = null;
  #timeTaken = null;
  #type = ''; // Stores the question type (e.g., 'addition', 'subtraction')

  /**
   * Constructor handles both fresh generation and loading from storage.
   * @param {string} question - The question text.
   * @param {string} questionEnglish - The question text in English.
   * @param {array} possibleAnswers - An array of possible answers.
   * @param {number} correctAnswer - The correct answer.
   * @param {string} type - The type of arithmetic question (e.g., 'addition').
   * @param {object} data - Optional JSON data for restoring the card from storage.
   */
  constructor(question, questionEnglish, possibleAnswers, correctAnswer, type = '', data = null) {
    if (data) {
      // Restore from JSON data (AsyncStorage or other sources)
      this.#question = data.question;
      this.#questionEnglish = data.questionEnglish;
      this.#possibleAnswers = data.possibleAnswers;
      this.#correctAnswer = data.correctAnswer;
      this.#answeredCorrectly = data.answeredCorrectly;
      this.#timeTaken = data.timeTaken;
      this.#type = data.type;
    } else {
      // Fresh card creation
      this.#question = question;
      this.#questionEnglish = questionEnglish;
      this.#possibleAnswers = possibleAnswers;
      this.#correctAnswer = correctAnswer;
      this.#type = type;
    }
  }

  // Getters for various fields
  getType() {
    return this.#type;
  }

  getQuestion() {
    return this.#question;
  }

  getQuestionEnglish() {
    return this.#questionEnglish;
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

  // Method to start the timer
  startTime() {
    this.#startTimeValue = Date.now();
  }

  // Method to end the timer and calculate time taken
  endTime() {
    this.#endTimeValue = Date.now();
    this.calculateTimeTaken();
  }

  // Calculate the time taken to answer
  calculateTimeTaken() {
    if (this.#startTimeValue && this.#endTimeValue) {
      this.#timeTaken = (this.#endTimeValue - this.#startTimeValue) / 1000; // Time in seconds
    }
  }

  /**
   * Method to submit an answer and mark whether it was correct.
   * @param {number} userAnswer - The answer provided by the player.
   */
  submitAnswer(userAnswer) {
    this.#answeredCorrectly = userAnswer === this.#correctAnswer;
    this.endTime(); // Stop the timer when the answer is submitted
  }

  // Convert the card to a JSON-friendly format for AsyncStorage or other storage
  toJSON() {
    return {
      question: this.#question,
      questionEnglish: this.#questionEnglish,
      possibleAnswers: this.#possibleAnswers,
      correctAnswer: this.#correctAnswer,
      answeredCorrectly: this.#answeredCorrectly,
      timeTaken: this.#timeTaken,
      type: this.#type, // Include the question type in the JSON
    };
  }

  // Static method to restore the card from JSON
  static fromJSON(data) {
    return new QuestionCard(null, null, null, null, '', data);
  }
}

export default QuestionCard;
