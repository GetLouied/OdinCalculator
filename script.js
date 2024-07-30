/*** TO DO LIST
 *      - Remeber multiple numbers typed (ie. 111111, or 567, 9834)
 *          - Currently it only takes a single digit.
 *      - Fix rounded numbers (check if float, round(7))
 *      - Add a backspace
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
    const itemDisplay = document.getElementById('item-display');


    // Event listener for number button clicks
    numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            clickedNumber = event.target.id 
    
            switch(clickedNumber) {
                case 'zero':
                    itemDisplay.innerText = '0';
                    !num1 ? num1 = 0 : num2 = 0;
                    break;
    
                case 'one':
                    itemDisplay.innerText = '1';
                    !num1 ? num1 = 1 : num2 = 1;
                    break;

                case 'two':
                    itemDisplay.innerText = '2';
                    !num1 ? num1 = 2 : num2 = 2;
                    break;

                case 'three':
                    itemDisplay.innerText = '3';
                    !num1 ? num1 = 3 : num2 = 3;
                    break;

                case 'four':
                    itemDisplay.innerText = '4';
                    !num1 ? num1 = 4 : num2 = 4;
                    break;

                case 'five':
                    itemDisplay.innerText = '5';
                    !num1 ? num1 = 5 : num2 = 5;
                    break;

                case 'six':
                    itemDisplay.innerText = '6';
                    !num1 ? num1 = 6 : num2 = 6;
                    break;

                case 'seven':
                    itemDisplay.innerText = '7';
                    !num1 ? num1 = 7 : num2 = 7;
                    break;

                case 'eight':
                    itemDisplay.innerText = '8';
                    !num1 ? num1 = 8 : num2 = 8;
                    break;

                case 'nine':
                    itemDisplay.innerText = '9';
                    !num1 ? num1 = 9 : num2 = 9;
                    break;
    
            }
    
        });
    })


    // Event listener for operator clicks
    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            clickedOperator = event.target.id;

            switch (clickedOperator) {
                case 'add':
                    itemDisplay.innerText = '+';
                    operator = '+';
                    break;
                case 'subtract':
                    itemDisplay.innerText = '-';
                    operator = '-'
                    break;
                case 'multiply':
                    itemDisplay.innerText = '*';
                    operator = '*'
                    break;
                case 'divide':
                    itemDisplay.innerText = '/';
                    operator = '/'
                    break;
            }

        });
    });
    
    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        itemDisplay.innerText = '';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    });
    
    // Equal button listener
    equalsButton.addEventListener('click', () => {
        let result = calculatorOperation(num1, num2, operator);
        itemDisplay.innerText = result;
        num1 = result;
    });

    // Decimal button listener
    decimalButton.addEventListener('click', () => {
        itemDisplay.innerText = '.';
    })

});






/********************************* OPERATION FUNCTIONS ****************************/

function calculatorOperation(num1, num2, operator) {

    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) {
        case '+':
            operator = undefined;
            return addNumbers(num1, num2);

        case '-':
            operator = undefined;
            return substractNumbers(num1, num2);

        case '*':
            operator = undefined;
            return multiplyNumbers(num1, num2);

        case '/':
            operator = undefined;
            return divideNumbers(num1, num2);
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