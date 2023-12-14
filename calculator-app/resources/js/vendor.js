// ! Ovaj fajl ce cuvati reference ka SVIM DOM elementima koje imamo u index.html-u

const userInput = document.querySelector('.js-input-number');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnExponent = document.getElementById('btn-exponent');
const btnClear = document.getElementById('btn-clear');

const currentCalculationOutput = document.querySelector('.js-current-calculation');
const currentResultOutput = document.querySelector('.js-current-result');

function outputResult(result, description) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = description;
}