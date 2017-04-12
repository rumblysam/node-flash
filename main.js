var inquirer = require('inquirer');
var cards = require('./cards.json');

//console.log((require('./cards.json')));

// cards.forEach(function(card) {
//     console.log(card.front);
// })


//var question = cards.first_card.front;
// var arr = [];
// for (var id in cards) {
//     arr.push(cards[question]);
// }

// We need to use a contructor, 
//but I didn't fully understand this in class.
//

//console.log(question);

inquirer.prompt([
    {
        "type":"input",
        "message": cards[0].front,
        "name":"answer"
    },

]).then(function (answers) {
    if (answers.answer == cards[0].back) {
        console.log("horray!");
    }
    //if answers.answer is equal to back
    // Use user feedback for... whatever!! 
});