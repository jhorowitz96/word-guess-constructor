var Letter = require("./letter.js");
var butler = new Letter ("butler", true);

var randomNumber;

var Word = function () {
    this.words = ["butler", "redick", "embiid", "fultz", "simmons"];
    this.makeDashes = function() {
        randomNumber = Math.floor(Math.random() * this.words.length) + 0;
        var guessedWords = this.words[randomNumber];
        var dashes = "";
        for (var i = 0; i < guessedWords.length; i++){
            dashes += "_";
            
            
        }
        return dashes;
    }

}

var wordGenerate = new Word();
var newDashes = wordGenerate.makeDashes();



module.exports = {
    newDashes: newDashes,
    randomNumber: randomNumber
};


