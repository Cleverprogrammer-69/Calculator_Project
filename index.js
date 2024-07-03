import inquirer from "inquirer";
let operations = ['+', '-', '*', '/', '%'];
let operation = Math.floor(Math.random() * 5);
let operand1 = 98;
let operand2 = 67;
let name1 = "abdullah";
let age = 21;
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
inquirer.prompt([
    {
        type: 'list',
        name: 'operator',
        message: 'Choose operation : ',
        choices: ['+', '-', '*', '/', '%']
    },
    {
        type: 'input',
        name: 'operand1',
        message: 'Enter first operand : ',
        validate: function (value) {
            if (isNaN(Number(value))) {
                return 'Please enter a number';
            }
            return true;
        }
    }, {
        type: 'input',
        name: 'operand2',
        message: 'Enter second operand : ',
        validate: function (value) {
            if (isNaN(Number(value))) {
                return 'Please enter a number';
            }
            return true;
        }
    }
])
    .then((answers) => {
    let operand1 = +(answers.operand1);
    let operand2 = +(answers.operand2);
    switch (answers.operator) {
        case '+':
            console.log(`Sum = ${sum(operand1, operand2)}`);
            break;
        case '-':
            console.log(`Difference = ${sub(operand1, operand2)}`);
            break;
        case '*':
            console.log(`Product = ${mul(operand1, operand2)}`);
            break;
        case '/':
            console.log(`Quotient = ${div(operand1, operand2)}`);
            break;
        case '%':
            console.log(`Remainder = ${mod(operand1, operand2)}`);
            break;
        default:
            console.log("Invalid operation");
            break;
    }
});
