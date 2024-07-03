import inquirer from "inquirer"

let operations:string[]=['+','-','*','/','%']
let operation:number=Math.floor(Math.random()*5)
let operand1:number=98
let operand2:number=67
let name1:string="abdullah"
let age:number=21
const sum=(a:number,b:number):number=>a+b
const sub=(a:number,b:number):number=>a-b
const mul=(a:number,b:number):number=>a*b
const div=(a:number,b:number):number=>a/b
const mod=(a:number,b:number):number=>a % b

inquirer.prompt([
    {
        type:'list',
        name:'operator',
        message:'Choose operation : ',
        choices:['+','-','*','/','%']
    },
    {
        type:'input',
        name:'operand1',
        message:'Enter first operand : ',
        validate:function(value:string){
            if(isNaN(Number(value))){
                return 'Please enter a number'
            }
            return true
        }
    },{
        type:'input',
        name:'operand2',
        message:'Enter second operand : ',
        validate:function(value:string){
            if(isNaN(Number(value))){
                return 'Please enter a number'
            }
            return true
        }
    }
])
.then((answers)=>{
    let operand1=+(answers.operand1)
    let operand2=+(answers.operand2)
    switch(answers.operator){
        case '+':
            console.log(`Sum = ${sum(operand1,operand2)}`)
            break;
        case '-':
            console.log(`Difference = ${sub(operand1,operand2)}`)
            break;
        case '*':
            console.log(`Product = ${mul(operand1,operand2)}`)
            break;
        case '/':
            console.log(`Quotient = ${div(operand1,operand2)}`)
            break;
        case '%':
            console.log(`Remainder = ${mod(operand1,operand2)}`)
            break;
        default:
            console.log("Invalid operation")
            break;
    }
})