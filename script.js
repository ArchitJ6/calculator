const display = document.getElementById('display');
let currentInput = '';
let isResultDisplayed = false;

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clear() {
    currentInput = '';
    isResultDisplayed = false;
    updateDisplay();
}

function handleNumberClick(number) {
    if (isResultDisplayed) {
        currentInput = '';
        isResultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function handleOperatorClick(op) {
    if (currentInput !== '' && !isResultDisplayed) {
        if (op === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
        } else {
            if (op == ".") {
                currentInput += op;
            } else {
                currentInput += ' ' + op + ' ';
            }
        }
        updateDisplay();
    } else if (currentInput === '' && !isResultDisplayed) {
        currentInput="0"
        if (op === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
        } else {
            if (op == ".") {
                currentInput += op;
            } else {
                currentInput += ' ' + op + ' ';
            }
        }
        updateDisplay();
    }
}

function handleEqualsClick() {
    try {
        if (currentInput.endsWith(' ')) {
            currentInput = currentInput.slice(0, -1); // Remove trailing operator
        }
        currentInput = math.evaluate(currentInput);
        isResultDisplayed = true;
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function handleBackClick() {
    currentInput = currentInput.slice(0, -1);
    isResultDisplayed = false;
    updateDisplay();
}

document.getElementById('btn-clear').addEventListener('click', clear);
document.getElementById('btn-0').addEventListener('click', () => handleNumberClick('0'));
document.getElementById('btn-1').addEventListener('click', () => handleNumberClick('1'));
document.getElementById('btn-2').addEventListener('click', () => handleNumberClick('2'));
document.getElementById('btn-3').addEventListener('click', () => handleNumberClick('3'));
document.getElementById('btn-4').addEventListener('click', () => handleNumberClick('4'));
document.getElementById('btn-5').addEventListener('click', () => handleNumberClick('5'));
document.getElementById('btn-6').addEventListener('click', () => handleNumberClick('6'));
document.getElementById('btn-7').addEventListener('click', () => handleNumberClick('7'));
document.getElementById('btn-8').addEventListener('click', () => handleNumberClick('8'));
document.getElementById('btn-9').addEventListener('click', () => handleNumberClick('9'));

document.getElementById('btn-plus').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('btn-minus').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('btn-multiply').addEventListener('click', () => handleOperatorClick('*'));
document.getElementById('btn-divide').addEventListener('click', () => handleOperatorClick('/'));
document.getElementById('btn-percent').addEventListener('click', () => handleOperatorClick('%'));
document.getElementById('btn-decimal').addEventListener('click', () => handleOperatorClick('.'));
document.getElementById('btn-back').addEventListener('click', handleBackClick);

document.getElementById('btn-equals').addEventListener('click', handleEqualsClick);