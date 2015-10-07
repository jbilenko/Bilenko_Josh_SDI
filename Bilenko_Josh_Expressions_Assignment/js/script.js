/**
Josh Bilenko
10.07.2015
Expressions Assignment
SDI Section 2
**/

// I decided to create a calculator that would give you the ideal tip for your service

var whatSalon = prompt("What Salon do you work in?");  // prompt to know what salon they are in

var cutTimes = prompt("How many haircuts did you have today?");
cutTimes = Number(cutTimes);
var cutCharge = prompt("How much do you charge for a haircut?"); // prompt to know how much they charge for a haircut
cutCharge = Number(cutCharge); // notifying that cutCharge is a numerical value

var blowTimes = prompt("How many blowdrys did you have today?");
blowTimes = Number(blowTimes);
var blowDry = prompt("How much do you charge for a blowdry?"); // prompt to know how much they charge for a blowdry
blowDry = Number(blowDry); // notifying that blowDry is a numerical value

var salonCut = prompt("How much percent does " + whatSalon + " take out of your services?"); // prompt what cut the salon takes for your services
salonCut = Number(salonCut); // notifying that salonCut is a numercal value
salonCut = Math.round(salonCut)/100;



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

//Haircut & Blowdry Totals
var hairTotal = cutCharge - (cutCharge * salonCut);
var blowTotal = blowDry - (blowDry * salonCut);

//Full Totals
var fullHair0 = hairTotal;
var fullHair1 = hairTotal;
var fullHair2 = hairTotal;
  fullHair0 += cutTen;
  fullHair1 += cutFifteen;
  fullHair2 += cutTwenty;
var fullBlow0 = blowTotal;
var fullBlow1 = blowTotal;
var fullBlow2 = blowTotal;
  blowTotal0 += blowTen;
  blowTotal1 += blowFifteen;
  blowTotal2 += blowTwenty;




//Console logs
// console.log(salonCut); Tested to see if Math Round created a percentage amount in decimals.  Input 30 for prompt came out as 0.3 TEST COMPLETE.

/**
Test is complete, another perfect score!
I input 45 for cutCharge, 50 for blowDry, 45 for salonCut, and Lanphier for whatSalon.

------ Output was ------
Another Test!
Your haircut charge is 45!
Your blowdry charge is 50!
What you get for your haircuts after Lanphier takes out is 24.75!
What you get for your blowdrys after Lanphier takes out is 27.5!

console.log("Another Test!");
console.log("Your haircut charge is " + cutCharge + "!");
console.log("Your blowdry charge is " + blowDry + "!");
console.log("What you get for your haircuts after " + whatSalon + " takes out is " + hairTotal + "!");
console.log("What you get for your blowdrys after " + whatSalon + " takes out is " + blowTotal + "!");
*/
