#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve) => setTimeout(resolve,2000));

async function Welcome() {
    
    const rainbowTitle= chalkAnimation.rainbow("Lets Start with Guess Game");
   await sleep();
   rainbowTitle.stop();
    
}
Welcome();
let PlayerLife = 3;
async function askQuestion() {
    //system pic any number itself between 1-10
    let randomNumber: number = Math.floor(Math.random() *10 + 1);
    do{
        PlayerLife-- ;
        console.log(`player life left: ${PlayerLife}`);
    var que = await inquirer.prompt([
        {
            type: "number",
            name:"rand_num",
            message: "Guess any number between 1 - 10",
            validate: (answer: number)=> {
                if(isNaN(answer)){
                    return chalk.red("please enter a valid number");
                }
                return true;
            }
        }
    ]);
    
    if(que.rand_num === randomNumber){
        console.log(chalk.green(`Congratulation you Won the Game 🎉`));
    }
        else if(que.rand_num < randomNumber){
            console.log(chalk.red(`Tha number you Choose is smaller 👎`));
        }
        else if(que.rand_num> randomNumber){
            console.log(chalk.red(`Tha number you Choose is Grater 👎`));
        }
    }
    while(PlayerLife > 0 && randomNumber !== que.rand_num );
    {
        const rainbowTitle= chalkAnimation.rainbow(" \n Game Over");
        await sleep();
        rainbowTitle.stop();
    }
}
async function startAgain(){
    do{
        console.clear();
        await Welcome();
        PlayerLife = 3;
        await askQuestion();
        var again = await inquirer
    .prompt({
            type: "input",
            name: "restart",
            message: "Do u want to Play Again? Press y/n"
           })
        }
        while(again.restart=="y" || again.restart=="Y" ||again.restart=="Yes" || again.restart=="YES" || again.restart=="yes");
    }
    startAgain();