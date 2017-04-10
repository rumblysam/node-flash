var mysql = require('inquirer');
var cards = require('./cards.json');

//console.log((require('./cards.json')));

var question = cards.first_card.front;

console.log(question);