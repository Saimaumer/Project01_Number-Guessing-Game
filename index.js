import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you enter a right number!!!.");
}
else {
    console.log("try again,you guessed a wrong number");
}
