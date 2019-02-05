var inquirer = require('inquirer');
var prompt = require('prompt');

var Letter = function (character, guess, ) {
    this.character = character;
    this.guess = guess;
    this.guessed = function () {
        if (this.guess === false) {
            return "_";
        }

        this.correct = function () {
            if (this.guess = true) {
                return character;
            }
        }
    }  
    // console.log(character);
}


module.exports = Letter; 