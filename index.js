//Pulls nessesary packages
const fs = require("fs/promises");
const inquirer = require("inquirer");
const generateSVGContent = require("./utils/generateSVGContent");
//Defines all the prompt questions and puts them in an array
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "list",
    name: "shapeColor",
    message: "Choose the color of your shape",
    choices: ["black", "white", "blue", "red", "yellow"],
  },
  {
    type: "input",
    message: "Enter the text you want up to three letters",
    name: "text",
    //sets max length of inut to 3
    maxLength: 3,
  },
  {
    type: "list",
    name: "textColor",
    message: "Choose the color of your text",
    choices: ["black", "white", "blue", "red", "yellow"],
  },
];

// this uses fs to write a new file using two input objects containing the title of the file and the contents
async function writeToFile(data) {
  const file = await generateSVGContent(data);
  fs.writeFile("logo.svg", file, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// initalizes app
async function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(answers);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
