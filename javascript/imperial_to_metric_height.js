var myName = prompt("Hello. What's your name?");
var weightPounds = prompt(`Hi there ${myName}! What's your weight in pounds?`);
var heightInches = prompt("How many inches tall are you?")
var heightCentimeters = heightInches * 2.54;
var weightKilograms = weightPounds * 0.453592;
console.log(`${myName} is ${heightCentimeters}cm and ${weightKilograms}kg.`);
