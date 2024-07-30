/*** TO DO LIST
 *      - Fix rounded numbers (check if float, round(7))
 *      - Add backspace functionality
 *      - Add keyboard support
 *      - Add a hard stop on length of numbers within display
 *          - (After certain length, alert user can't add more)
 *      - Decimal operation functionality
 *   
 * 
 *   DISPLAY STYLING
 *      - Change button display
 *      - Change overall calculator display
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
                    previousItemDisplay = `${num1} ${operator} ${num2}`;
                }
            }

        });
    });


    // Event listener for operator clicks
    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedOperator = event.target.id;
            const operatorSymbol = operatorMap[clickedOperator]

            if (num1 && clickedOperator) {
                operator = operatorSymbol;
                isOperatorSet = true;
                previousItemDisplay.innerText = `${num1} ${operator}`;
                itemDisplay.innerText = '';
            }

        });
    });
    
    // Equal button listener
    equalsButton.addEventListener('click', () => {
        let result = calculatorOperation(Number(num1), Number(num2), operator);
        previousItemDisplay.innerText = `${num1} ${operator} ${num2} =`;
        itemDisplay.innerText = result.toString().slice(0, 8); 
        num2 = '';
        operator = '';
        isOperatorSet = false;
    })

    // Decimal button listener
    decimalButton.addEventListener('click', () => {
        
    })

    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        itemDisplay.innerText = '';
        previousItemDisplay.innerText = '';
        num1 = '';
        num2 = '';
        operator = '';
        isOperatorSet = false;
    });

    // Event listener for del button
    deleteButton.addEventListener('click', () => {
        if (!isOperatorSet) {
            num1 = num1.slice(0, -1);
            itemDisplay.innerText = num1;
        } else {
            num2 = num2.slice(0, -1);
            itemDisplay.innerText = num2;
            previousItemDisplay.innerText = `${num1} ${operator}`;
        }
    });

});








/********************************* OPERATION FUNCTIONS ****************************/

function calculatorOperation(num1, num2, operator) {

    switch(operator) {
        case '+':
            return addNumbers(num1, num2);

        case '-':
            return substractNumbers(num1, num2);

        case '*':
            return multiplyNumbers(num1, num2);

        case '/':
            return divideNumbers(num1, num2);

        default: 
            return 0;
    }

}




/********************************** MATH FUNCTIONS *******************************/

// Addition
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Subctraction
function substractNumbers(num1, num2) {
    return num1 - num2;
}


// Mulitplication
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Division 
function divideNumbers(num1, num2) {
    return num1 / num2
}