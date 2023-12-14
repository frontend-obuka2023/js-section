const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

function getUserInput() {
    return +userInput.value; // Konvertujemo uneti tekst (koji je uvek string) u number
}

function writeOutput(operator, resultBeforeCalc, calcNumber) {
    // npr: 5 + 3
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToOperationHistory(typeOfOperation, previousResult, enteredNumber, newResult) {
    const logEntry = {
        operation: typeOfOperation,
        previousResult: previousResult,
        operationNumber: enteredNumber,
        newResult: newResult
    };
    logOfOperations.push(logEntry);
    console.log(logOfOperations);
}

// Adding (Sabiranje)
function add() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initResult, enteredNumber);
    writeToOperationHistory('ADDING', initResult, enteredNumber, currentResult);
}

// Subtract (oduzimanje)
function subtract() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult -= enteredNumber; // 5 - 3 = 2
    writeOutput('-', initResult, enteredNumber);
    writeToOperationHistory('SUBTRACT', initResult, enteredNumber, currentResult);
}

// Multiply (mnozenje)
function multiply() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult *= enteredNumber; // 3 * 3 = 9
    writeOutput('*', initResult, enteredNumber);
    writeToOperationHistory('MULTIPLY', initResult, enteredNumber, currentResult);
}

// Divide (deljenje)
function divide() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult /= enteredNumber; // 4 / 2 = 2
    writeOutput('/', initResult, enteredNumber);
    writeToOperationHistory('DIVIDE', initResult, enteredNumber, currentResult);
}

// EXPONENTIATION (na n-ti)
function exponentiation() {
    const enteredNumber = getUserInput();
    const initResult = currentResult;
    currentResult **= enteredNumber; // 2 ** 3 = 8
    writeOutput('**', initResult, enteredNumber);
    writeToOperationHistory('EXPONENTIATION', initResult, enteredNumber, currentResult);
}

// clear (resets: current result, input of user, deletes the log and outputs)
function clear() {
    currentResult = 0;
    userInput.value = 0;
    logOfOperations = [];
    currentCalculationOutput.textContent = 0;
    currentResultOutput.textContent = 0;
}

btnAdd.addEventListener('click', add); // ovde uz add ne trebaju oblaste zagrade -> add() 
btnSubtract.addEventListener('click', subtract);
btnMultiply.addEventListener('click', multiply);
btnDivide.addEventListener('click', divide);
btnExponent.addEventListener('click', exponentiation);
btnClear.addEventListener('click', clear);

// TODO Domaci:
/**
 * 1. Uraditi sve isto za oduzimanje, mnozenje, deljenje, i eksponencijalni operator(**)
 * 2. Implementirati Clear feature, kada korisnik klikne na C da se obrise:
 *   - history,
 *   - trenutni opis operacije (0)
 *   - trenutni rezultat (0)
 *   - korisnicki input postaviti na 0
 */