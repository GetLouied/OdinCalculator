/********************************* FUNCTION CONNECTION *************************************/

document.addEventListener('DOMContentLoaded', function() {
    const numberButtons = document.querySelectorAll('#zero', '#one', '#two',
        '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine',);
    const operatorButtons = document.querySelectorAll('#add', '#subtract', '#multiply', '#divide',);
    const decimalButton = document.getElementById('decimal');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear-button');
    const itemDisplay = document.getElementById('item-display');

});






/********************************* OPERATION FUNCTIONS ****************************/

let num1;
let num2;
let operator;

function calculatorOperation(operator, num1, num2) {

    switch(operator) {
        case '+':
            addNumbers(num1, num2);

        case '-':
            substractNumbers(num1, num2);

        case '*':
            multiplyNumbers(num1, num2);

        case '/':
            divideNumbers(num1, num2);
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