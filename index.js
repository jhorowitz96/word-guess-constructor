var Word = require("./word.js");

var inquirer = require('inquirer');
var prompt = require('prompt');

var sixers = ["butler", "redick", "embiid", "fultz", "simmons"];
var wordGuessed = sixers[Word.randomNumber];
var dashes = Word.newDashes;
var wrongLetters = [];
var correctLetters = [];
var remainingGuesses = 11;

// console.log(dashes);
// console.log("\n")

function Game(){
   


var count = 0;
var GuessSixer = function () {
    if (count < 10) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter!",
                    name: "letter"
                }
            ]).then(function (answers) {
                var pressedLetter = answers.letter;
                // wordGuessed.split("")
                this.createDashes = function () {
                    for (var i = 0; i < wordGuessed.length; i++) {
                        Word.newDashes += " _ ";
                        return Word.newDashes;
                    }
                    console.log(Word.newDashes);
                }
                if (wordGuessed.indexOf(pressedLetter) == - 1) {
                    console.log("Sorry! That's not the right letter.");
                    wrongLetters.push(pressedLetter);
                    console.log(wrongLetters);
                    
                }
                else {
                    console.log("Congrats! That letter exists.");
                    correctLetters.push(pressedLetter);
                    console.log(correctLetters);
                }
                GuessSixer();
            });
            remainingGuesses--;
            console.log('\n' + remainingGuesses + " Guesses Left.");
   
    }
    
}
GuessSixer();
}
Game();