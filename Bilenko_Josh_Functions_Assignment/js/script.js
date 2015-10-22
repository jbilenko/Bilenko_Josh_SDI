/**
Josh Bilenko
SDI Section 2
10.22.2015
*/

// Movies or stay home calculator

alert("Welcome to Movie or Rent!");

var name = prompt("What is your name?");
var urWallet = prompt("How much money do you have?");
var howMany = prompt("How many people are there?");

// Total for Movie function!

function movieCalc(ticketCost, howMany, avgFood){
  var movieTotal = avgFood + (howMany * ticketCost);
  return movieTotal;
}

var movieTotal = movieCalc(12, howMany, 20); //average pricing and audience per movie visit

if(urWallet >= movieTotal){ //if you have more money than the cost of movies you can go!
    alert("Hey! You can afford the movies!");
    console.log("Let's go to the Movies");
    console.log("Hey " + name + "!");
    console.log("For the " + howMany + " of you to go to the movies it will cost $" + movieTotal + ".");

}else {  // if you don't have enough, you stay home
    alert("Looks like you cant afford the movies!");
    //Total for Home Movie Night

    var homeCalc = function(rentMovie, pizza){
      var homeTotal = rentMovie + pizza;
      return homeTotal;
    }

    var rentMovie = 5; // returning the value of rentMovie.
    var stayHome = homeCalc(5, 14); // numbers based off of average prices

    console.log("Hey " + name + "!");
    console.log("The " + howMany + " of us should stay in and order a movie!");
    console.log("To rent a movie it will cost $" + rentMovie + ".");
    console.log("The total will be $" + stayHome +"!");
}
