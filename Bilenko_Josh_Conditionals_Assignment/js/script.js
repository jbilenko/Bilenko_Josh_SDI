/**
Josh Bilenko
10.15.2015
Expressions Assignment
SDI Section 2
**/

// I decided to branch off on the salon calculator, and create a conditional on if you are a person who cuts hair or colors hair.

var whatSalon = prompt("What Salon do you work in?");  // prompt to know what salon they are in
var salonRole = prompt("Do you Cut or Color?"); // prompt to know what conditional it needs to read off of

while (salonRole == "") {
  alert("Sorry you did not tell us if you Cut or Color!");
  console.log("Please let us no if you Cut or Color!");
  var salonRole = prompt("Do you Cut or Color?"); // if left empty it will ask to fill in.
}

if (salonRole == ("Cut" || "cut")) {

  var cutTimes = prompt("How many haircuts did you have today?");
  cutTimes = Number(cutTimes);
  var cutCharge = prompt("How much do you charge for a haircut?"); // prompt to know how much they charge for a haircut
  cutCharge = Number(cutCharge); // notifying that cutCharge is a numerical value

} else if (salonRole == ("Color" || "color")) {

  var colorTimes = prompt("How many clients came in for color?"); // same as cutTimes
  colorTimes = Number(colorTimes);
  var colorCharge = prompt("How much do you charge for a color?"); // same as cutCharge
  colorCharge = Number(colorCharge);

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
  var fullColor0 = colorTotal;
  var fullColor1 = colorTotal;
  var fullColor2 = colorTotal;
    fullColor0 += colorTen;
    fullColor1 += colorFifteen;
    fullColor2 += colorTwenty;

if (salonRole == "Cut") {
  //Console logs
  console.log("Hey! Welcome to the Salon-culator");
  console.log("You are a Hair Stylist at " + whatSalon + " where they are taking out " + cutConsole + "% out of each service.");
  console.log("You are currently charging $" + cutCharge +" for haircuts.");
  console.log("An okay tip from a client after your haircut is $" + cutTen + "");
  console.log("A decent tip from a client after your haircut is $" + cutFifteen + "");
  console.log("A great tip from a client after your haircut is $" + cutTwenty + "");
  console.log("Here are your total earnings after each haircut and depending on the tip:");
  console.log("A 10% tip will give you $" + fullHair0 + ", a 15% tip will give you $" + fullHair1 + ", and a 20% tip will give you $" + fullHair2 + "");
  console.log("You said you had " + cutTimes + " haircuts today giving you a total earnings of $" + hairToday + " no tips included!");
  console.log("Have a good day!");
} else {
  //Console logs
  console.log("Hey! Welcome to the Salon-culator");
  console.log("You are a Colorist at " + whatSalon + " where they are taking out " + cutConsole + "% out of each service.");
  console.log("You are currently charging $" + colorCharge +" for color.");
  console.log("An okay tip from a client after your color is $" + colorTen + "");
  console.log("A decent tip from a client after your color is $" + colorFifteen + "");
  console.log("A great tip from a client after your color is $" + colorTwenty + "");
  console.log("Here are your total earnings after each color and depending on the tip:");
  console.log("A 10% tip will give you $" + fullColor0 + ", a 15% tip will give you $" + fullColor1 + ", and a 20% tip will give you $" + fullColor2 + "");
  console.log("You said you had " + colorTimes + " clients today for color, giving you a total earnings of $" + colorToday + " no tips included!");
  console.log("Have a good day!");
}


/**
Test 1: While function
While function works only when the field is left blank.  Don't know how to create it so that it will work for nothing but Cut or Color.

Test 2: Cut.


INPUT
whatSalon = Salon
salonCut = 25
cutCharge = 50
cutTimes = 9

OUTPUT
You are a Hair Stylist at Salon where they are taking out 25% out of each service. script.js:88:3
You are currently charging $50 for haircuts. script.js:89:3
An okay tip from a client after your haircut is $5 script.js:90:3
A decent tip from a client after your haircut is $7.5 script.js:91:3
A great tip from a client after your haircut is $10 script.js:92:3
Here are your total earnings after each haircut and depending on the tip: script.js:93:3
A 10% tip will give you $42.5, a 15% tip will give you $45, and a 20% tip will give you $47.5 script.js:94:3
You said you had 9 haircuts today giving you a total earnings of $337.5 no tips included! script.js:95:3
Have a good day!

Test 3: Color.

INPUT
whatSalon = Salon
salonCut = 25
colorCharge = 150
colortimes = 9

OUTPUT
You are a Colorist at Salon where they are taking out 25% out of each service. script.js:100:3
You are currently charging $150 for haircuts. script.js:101:3
An okay tip from a client after your haircut is $15 script.js:102:3
A decent tip from a client after your haircut is $22.5 script.js:103:3
A great tip from a client after your haircut is $30 script.js:104:3
Here are your total earnings after each haircut and depending on the tip: script.js:105:3
A 10% tip will give you $127.5, a 15% tip will give you $135, and a 20% tip will give you $142.5 script.js:106:3
You said you had 9 haircuts today giving you a total earnings of $1012.5 no tips included! script.js:107:3
Have a good day! script.js:108:3


*/
