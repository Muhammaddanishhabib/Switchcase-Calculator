#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Step 1
const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string,
} =await inquirer.prompt
([
    {type:"number",
    name:"numberOne",
    message:"Enter Your first Number"},

    {type:"number",
    name:"numberTwo",
    message:"Enter Your Second Number"},

    {type:"list",
    name:"operator",
    message:"Enter Your Operator",
    choices:["+","-","*","/"]}
])
//Sterp 2
    const { numberOne, numberTwo, operator} = answers;

    let result
    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        default:
            break;
    
    console.log( "Invalid operator")
    }
    console.log(`${numberOne}${operator}${numberTwo} = ${result}`);