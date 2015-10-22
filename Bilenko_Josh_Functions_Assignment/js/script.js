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

if (whereTo = true) {
  var howMany = prompt("How many people are going to the movies?");
  howMany = Number(howMany);
} else {
  alert("So you've made you decisions to stay home! Congrats! Goodbye!");
}


// How many pizzas ultimate function

    function pizzaAmnt(howMany) {
      var pizzaAmnt = howMany * (3/8);
      console.log("You should get " + pizzaAmnt + " pizza(s) for " + howMany + " person(s).");
    }

var movieTicket = 12;
var avgfoodCost = 15;
var rentMovie = 5;
var lgPizza = 14;
var homeCost = rentMovie + (pizzaAmnt * lgPizza);
var movieCost = howMany * (movieTicket + avgfoodCost);


// conditional for amount of money you have vs movie total cost

if (urWallet > movieCost) {
  alert("You can afford to go to the movies!");
  console.log("You have $" + urWallet + " and going to the movies with " + howMany + " people will cost $" + movieCost + "!");
  console.log("Let's go to the movies!");
} else {
    alert("Hey! Stay home an rent a movie!");
    console.log("You have $" + urWallet + " and staying home to rent a movie for " + howMany + " people costs $" + homeCost + "!");
    pizzaAmnt(howMany);
    console.log("Enjoy your night a home!");
}
