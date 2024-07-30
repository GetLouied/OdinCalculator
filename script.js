/*** TO DO LIST
 *      - Add keyboard support
 * 
 ***/

/********************************* FUNCTION CONNECTION *************************************/


let num1 = '';
let num2 = '';
let operator = '';
let isOperatorSet = false;

document.addEventListener('DOMContentLoaded', function() {
    const numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
    const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
    const decimalButton = document.getElementById('decimal');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear-button');
    const deleteButton = document.getElementById('del-button');
    const itemDisplay = document.getElementById('item-display');
    const previousItemDisplay = document.getElementById('previous-item-display');

    // Digit Dictionary
    const digitMap = {
        'zero': '0',
        'one': '1',
        'two': '2', 
        'three': '3', 
        'four': '4', 
        'five': '5', 
        'six': '6', 
        'seven': '7',
        'eight': '8', 
        'nine': '9', 
    };

    // Operator Dictionary
    const operatorMap = {
        'add': '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/'
    };

    function canAddCharacter() {
        return itemDisplay.innerText.length < 8;
    }

    function evaluateCurrentOperation() {
        if (num1 && num2 && operator) {
            const result = calculatorOperation(parseFloat(num1), parseFloat(num2), operator);
            num1 = result.toString();
            num2 = '';
            operator = '';
            isOperatorSet = false;
            return result;
        }
        return parseFloat(num1);
    }

    // Event listener for number button clicks
    numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!canAddCharacter()) return;

            const clickedId = event.target.id;
            const clickedNumber = digitMap[clickedId];

            if (clickedNumber) {
                if (!isOperatorSet) {
                    num1 += clickedNumber;
                    itemDisplay.innerText = num1;
                } else {
                    num2 += clickedNumber;
                    itemDisplay.innerText = num2;
                    previousItemDisplay.innerText = `${num1} ${operator} ${num2}`;
                }
            }
        });
    });

    // Event listener for operator clicks
    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedOperator = event.target.id;
            const operatorSymbol = operatorMap[clickedOperator];

            if (num1 && num2 && isOperatorSet) {
                const result = evaluateCurrentOperation();
                num1 = result.toString();
                operator = operatorSymbol;
                previousItemDisplay.innerText = `${num1} ${operator}`;
                itemDisplay.innerText = '';
                isOperatorSet = true;
            } else if (num1 && !num2) {
                operator = operatorSymbol;
                isOperatorSet = true;
                previousItemDisplay.innerText = `${num1} ${operator}`;
                itemDisplay.innerText = '';
            } else if (num1 && operator) {
                const result = evaluateCurrentOperation();
                num1 = result.toString();
                operator = operatorSymbol;
                previousItemDisplay.innerText = `${num1} ${operator}`;
                itemDisplay.innerText = '';
                isOperatorSet = true;
            }
        });
    });

    // Equal button listener
    equalsButton.addEventListener('click', () => {
        const result = evaluateCurrentOperation();
        if (result !== undefined) {
            previousItemDisplay.innerText = `${num1} =`;
            itemDisplay.innerText = result.toString().slice(0, 8);
        }
    });

    // Decimal button listener
    decimalButton.addEventListener('click', () => {
        if (!canAddCharacter()) return;

        if (!isOperatorSet) {
            if (!num1.includes('.')) {
                num1 += '.';
                itemDisplay.innerText = num1;
            }
        } else {
            if (!num2.includes('.')) {
                num2 += '.';
                itemDisplay.innerText = num2;
                previousItemDisplay.innerText = `${num1} ${operator} ${num2}`;
            }
        }
    });

    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        itemDisplay.innerText = '';
        previousItemDisplay.innerText = '';
        num1 = '';
        num2 = '';
        operator = '';
        isOperatorSet = false;
    });

    // Event listener for delete button
    deleteButton.addEventListener('click', () => {
        if (!isOperatorSet) {
            num1 = num1.slice(0, -1);
            itemDisplay.innerText = num1;
        } else {
            num2 = num2.slice(0, -1);
            itemDisplay.innerText = num2;
            previousItemDisplay.innerText = `${num1} ${operator} ${num2}`;
        }
    });

    // Calculator operation functions
    function calculatorOperation(num1, num2, operator) {
        switch (operator) {
            case '+':
                return addNumbers(num1, num2);
            case '-':
                return subtractNumbers(num1, num2);
            case '*':
                return multiplyNumbers(num1, num2);
            case '/':
                return divideNumbers(num1, num2);
            default:
                return 0;
        }
    }

    // Math functions
    function addNumbers(num1, num2) {
        return num1 + num2;
    }

    function subtractNumbers(num1, num2) {
        return num1 - num2;
    }

    function multiplyNumbers(num1, num2) {
        return num1 * num2;
    }

    function divideNumbers(num1, num2) {
        return num1 / num2;
    }
});
