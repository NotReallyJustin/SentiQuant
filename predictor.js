// Runs a "random" algorithm to give stock predictions
/**
 * Runs a "random" algorithm to give stock predictions.
 * The goal of this is to have a "random-ish" prediction that stays the same day to day
 * @param {String} innerText The inner text of the Crystall Ball div
 * @returns {String} 'Stonks', 'Not Stonks', or 'Nothing'
 */
const predict = (innerText) => {

    let returnVals = ['Stonks', 'Not Stonks', 'Nothing'];

    // The number we're generating
    let generatedNum = (sumTodate() * asciiSum(innerText) + Math.round(Math.log2(asciiSum(innerText)) * sumTodate())) % 3;

    return returnVals[generatedNum];
}

/**
 * Returns the sum of today's date (after running a funny algorithm)
 * @return {Number} Self-Explanatory.
 */
const sumTodate = () => {
    let today = new Date();

    return today.getUTCFullYear() + today.getUTCMonth() + today.getUTCDate() * today.getDate();
}

/**
 * @returns {Number} Returns the sum of all ASCII chars in a string
 * @param {String} str String to return the sum of
 */
const asciiSum = (str) => str.split("").reduce((cumL, currChar) => cumL + currChar.charCodeAt(0), 0);