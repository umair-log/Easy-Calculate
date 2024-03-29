#! /usr/bin/env node
import inquirer from "inquirer";

async function ask() {
  const answer = await inquirer.prompt([
    {
      message: "Choose Operation: ",
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Multipy", "Division", "Stop"],
    },
  ]);

  // Check the user's choice
  if (answer.operator === "Stop") {
    console.log("Program terminated.");
    return; // Exit the function if the user chooses "Stop"
  }

  const numbers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "num1" },
    { message: "Enter Second Number", type: "number", name: "num2" },
  ]);

  //   conditions
  if (answer.operator === "Addition") {
    console.log(`Result: ${numbers.num1 + numbers.num2}`);
    ask();
  } else if (answer.operator === "Substraction") {
    console.log(`Result: ${numbers.num1 - numbers.num2}`);
    ask();
  } else if (answer.operator === "Multipy") {
    console.log(`Result: ${numbers.num1 * numbers.num2}`);
    ask();
  } else if (answer.operator === "Division") {
    console.log(`Result: ${numbers.num1 / numbers.num2}`);
    ask();
  } else {
    console.log("Choose valid Operation");
    ask();
  }
}
ask();
