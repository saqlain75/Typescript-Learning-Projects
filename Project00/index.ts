#! /usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer";


const sleep=()=>{
   return new Promise((resolve) => {
       setTimeout(resolve,2000)
})
};

async function welcome(){
 let title= chalkAnimation.rainbow('Lets start calculation ');
 await sleep();
 console.log(`  _____________________
 |  _________________  |
 | | JO           0. | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|`); 
};
await welcome();
async function askQuestion(){
    const answers = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter number 1: "
    },
    {
        type:"number",
        name:"num2",
        message:"Enter number 2: "
    }
  ]);
 
    if (answers.operator == "Addition") {
      console.log(chalk.cyan(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)); 
    }
    else if (answers.operator == "Subtraction") {
      console.log(chalk.cyan(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)); 
    }
    else if (answers.operator == "Multiplication") {
      console.log(chalk.cyan(`${answers.num1} X ${answers.num2} = ${answers.num1 * answers.num2}`)); 
    }
    else if (answers.operator == "Division") {
      console.log(chalk.cyan(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)); 
    }
  
};
 
async function startAgain(){
do {
  await askQuestion();
  var again= await inquirer.prompt({
type:"input",
name:"restart",
message:"Do you want to continue? press y or n: "
  })
} 
while(again.restart=="y")
}
startAgain();





    

