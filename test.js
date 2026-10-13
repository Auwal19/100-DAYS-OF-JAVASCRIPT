const userInput = require("prompt-sync")();

let name = userInput("What is your name: "); 
let age = userInput("Enter your age: ");
let height = userInput("How tall are you: ");
let complexion = userInput("what is your skin color: ");
let school = userInput("Which school did you attend: ");
let hobby = userInput("What do you like doing: ");

console.log(`my name is ${name}`);
console.log("Your age is " + age);
console.log("Your height is " + height);
console.log("Your complexion is " + complexion);
console.log("Your school is " + school);
console.log("Your hobby is " + hobby);




