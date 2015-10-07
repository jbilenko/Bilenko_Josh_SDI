/**
Josh Bilenko
10.07.2015
Expressions Assignment
SDI Section 2
**/

// I decided to create a calculator that would give you the ideal tip for your service

var whatSalon = prompt("What Salon do you work in?");  // prompt to know what salon they are in
var cutCharge = prompt("How much do you charge for a haircut?"); // prompt to know how much they charge for a haircut
cutCharge = Number(cutCharge); // notifying that cutCharge is a numerical value
var blowDry = prompt("How much do you charge for a blowdry?"); // prompt to know how much they charge for a blowdry
blowDry = Number(blowDry); // notifying that blowDry is a numerical value

//Tip Variables
var tipPercent = [.1,.15,.2]; // array for tip percentages

//Haircut Tip Calculations
var cutTen = cutCharge * tipPercent[0];
var cutFifteen = cutCharge * tipPercent[1];
var cutTwenty = cutCharge * tipPercent[2];

//Blowdry Tip Calculations
var blowTen = blowDry * tipPercent[0];
var blowFifteen = blowDry * tipPercent[1];
var blowTwenty = blowDry * tipPercent[2];
