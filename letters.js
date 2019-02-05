var inquirer = require('inquirer');
var prompt = require('prompt');

var letter = function (character, guess, ) {
    this.character = character;
    this.guess = false;
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

}
module.exports = Letter; 