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

// conditional for amount of money you have vs movie total cost

if (movieCost < urWallet) {
  alert("You can afford to go to the movies!");
  console.log("You have $" + urWallet + " and going to the movies with " + howMany + " people will cost $" + movieCost + "!");
  console.log("Let's go to the movies!");
} else {
  alert("Do you even have enough money to stay home and rent a movie?");

  function pizzaCalc (howMany) {
    var pizzaAmnt = howMany * (3/8);
    return pizzaAmnt
  }

  Math.round(pizzaAmnt);

  function homeMovie (rentMovie, pizzaCalc, pizzaAmnt) {
    var homeCost = rentMovie + pizzaAmnt;
    return homeCost
  }

  if (homeCost < urWallet) {
    alert("Hey! Stay home an rent a movie!");
    console.log("You have $" + urWallet + " and staying home to rent a movie for " + howMany + " people costs $" + homeCost + "!");
    console.log("Since you have " + howMany + " people staying over to watch a movie you need to get " + pizzaAmnt + " pizzas!");
    console.log("Enjoy your night a home!");
  } else {
    alert("You are poor.  Therefore stay home with the lights off to save money.");
    alert("Enjoy your life in solitude for the next 6 hours!");
    alert("Refresh to do this again!");
  }

}
