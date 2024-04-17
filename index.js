#! usr/bin/env node
// Import inquirer module.
import inquirer from "inquirer";
// Declare a constant answer and assign it to the result og inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to Count the Word:"
    }
]);
const words = answer.sentence.trim().split(" ");
// Print the array of the words to the console
console.log(words);
// Print the words count of the sentence to the console
console.log(`Your Semtemce Word Count is ${words.length}`);
