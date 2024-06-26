#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What you want to add in your todo list?'
        },
        {
            name: "add",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(answer.todo);
    condition = answer.add;
    console.log(todos);
}
