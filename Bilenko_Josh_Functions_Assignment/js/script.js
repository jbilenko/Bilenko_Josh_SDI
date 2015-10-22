/**
Josh Bilenko
SDI Section 2
10.22.2015
*/

// Movies or stay home calculator

alert("Welcome to Movies or Stay Home Calculator!");

var urWallet = prompt("How much money do you have?");
urWallet = Number(urWallet);

var whereTo = confirm("Are you trying to go to the movies? Ok (Yes) Cancel (No)");

// cost of items
var movieTicket = 12;
var avgfoodCost = 15;
var rentMovie = 5;
var lgPizza = 14;

if (whereTo = true) {
  var howMany = prompt("How many people are going to the movies?");
  howMany = Number(howMany);
} else {
  var alert("So you've made you decisions to stay home! Congrats! Goodbye!");
}

// Movie total function

var movieTotal = movieCalc;

function movieCalc (movieTicket, avgfoodCost, howMany) {
  var movieCost = howMany * (movieTicket + avgfoodCost);
  return movieCost
}
