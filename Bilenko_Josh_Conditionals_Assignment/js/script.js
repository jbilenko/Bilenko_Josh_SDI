/**
Josh Bilenko
10.15.2015
Expressions Assignment
SDI Section 2
**/

// I decided to branch off on the salon calculator, and create a conditional on if you are a person who cuts hair or colors hair.

var whatSalon = prompt("What Salon do you work in?");  // prompt to know what salon they are in
var salonRole = prompt("Do you Cut or Color?"); // prompt to know what conditional it needs to read off of

if (salonRole == "Cut") {

  var cutTimes = prompt("How many haircuts did you have today?");
  cutTimes = Number(cutTimes);
  var cutCharge = prompt("How much do you charge for a haircut?"); // prompt to know how much they charge for a haircut
  cutCharge = Number(cutCharge); // notifying that cutCharge is a numerical value

} else {

  var colorTimes = prompt("How many clients came in for color?"); // same as cutTimes
  colorTimes = Number(colorTimes);
  var colorCharge = prompt("How much do you charge for a color?"); // same as cutCharge
  colorCharge = Number(colorTimes);

}

var salonCut = prompt("How much percent does " + whatSalon + " take out of your services?"); // prompt what cut the salon takes for your services
salonCut = Number(salonCut); // notifying that salonCut is a numercal value
salonCut = Math.round(salonCut)/100;
cutConsole = Math.round(salonCut * 100);

//Tip Variables
var tipPercent = [.1,.15,.2]; // array for tip percentages

// Haircut Math

  //Haircut Tip Calculations
  var cutTen = cutCharge * tipPercent[0];
  var cutFifteen = cutCharge * tipPercent[1];
  var cutTwenty = cutCharge * tipPercent[2];

  //Haircut Totals
  var hairTotal = cutCharge - (cutCharge * salonCut);

  //Haircut earnings
  var hairToday = cutTimes * hairTotal

  //Full Haircut Totals
  var fullHair0 = hairTotal;
  var fullHair1 = hairTotal;
  var fullHair2 = hairTotal;
    fullHair0 += cutTen;
    fullHair1 += cutFifteen;
    fullHair2 += cutTwenty;

// Color Math

  //Color Tip Calculations
  var colorTen = colorCharge * tipPercent[0];
  var colorFifteen = colorCharge * tipPercent[1];
  var colorTwenty = colorCharge * tipPercent[2];

  //Color Totals
  var colorTotal = colorCharge - (colorCharge * salonCut);

  //Color earnings
  var colorToday = colorTimes * colorTotal

  //Full Color Totals
  var fullColor0 = hairTotal;
  var fullColor1 = hairTotal;
  var fullColor2 = hairTotal;
    fullColor0 += colorTen;
    fullColor1 += colorFifteen;
    fullColor2 += colorTwenty;
