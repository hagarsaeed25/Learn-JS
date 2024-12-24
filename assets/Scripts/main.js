/*
If Statement :-
*/
// #1 — Determine If a Number Is Positive
let number = 5;
if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is Negative.");
}
console.log("----------------------");
//  #2 — Ticket Pricing
let age = 25;
let ticketPrice;

if (age < 12) {
  ticketPrice = 5;
} else if (age >= 12 && age < 18) {
  ticketPrice = 10;
} else if (age >= 18 && age < 60) {
  ticketPrice = 20;
} else {
  ticketPrice = 15;
}
console.log("Ticket Price: $" + ticketPrice);

console.log("----------------------");
// #3 — Number Guessing Game
let secretNumber = 10;
let guessingNumber = 6;

if (guessingNumber == secretNumber) {
  console.log("Congratulations! You guessed the correct number.");
} else if (guessingNumber > secretNumber) {
  console.log("Try a lower number .");
} else {
  console.log("Try a higher number.");
}
console.log("----------------------");
/*
Switch :-
*/
// #1 — Advice based in Time :-
let hour = 22;
switch (true) {
  case hour >= 0 && hour <= 5:
    console.log("it's to late you shoud sleep");
    break;
  case hour >= 6 && hour <= 11:
    console.log("Good morning! Time for breakfast");
    break;
  case hour >= 12 && hour <= 17:
    console.log("Good afternoon! Keep workinng");
    break;
  case hour >= 18 && hour <= 21:
    console.log("Good evening! Relax a bit ");
    break;
  case hour >= 22 && hour <= 23:
    console.log("Prepare for bed");
    break;
  default:
    console.log("Invalid day!");
}
console.log("----------------------");
// #2 — Calculator Porgram
console.log("Choose an operation:");
console.log("1: Addition (+)");
console.log("2: Subtraction (-)");
console.log("3: Multiplication (*)");
console.log("4: Division (/)");

let operation = 4;
let num1 = 4;
let num2 = 2;

switch (operation) {
  case 1:
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 2:
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 3:
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 4:
    if (num2 !== 0) {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
      console.log("Error: Division by zero is not allowed!");
    }
    break;
  default:
    console.log("Invalid operation! Please choose a number between 1 and 4.");
}
console.log("----------------------");
/*
Loops :-
.while 
.do while 
.for
*/

/*
for :-
*/
// #1 — Print Numbers from 1 to 10 :-
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("----------------------");
// #2 — Print odd numbers

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("----------------------");
// #3 Multiplation Table

for (let num1 = 1; num1 <= 12; num1++) {
  for (let num2 = 1; num2 <= 12; num2++) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  }
  console.log("----------------------");
}

/*
While  :-
*/
// #1 — Print even numbers

let number1 = 0;
while (number1 <= 20) {
  if (number1 % 2 == 0) {
    console.log(number1);
  }
  number1++;
}
console.log("----------------------");
// #2 — sum of numbers from 1 to 50
let sum = 1;
let i = 0;
while (sum <= 50) {
  i += sum;
  sum++;
}
console.log(i);

console.log("----------------------");

/*
do while  :-
*/
// #1 — Print Numbers from 10 to 1
let num3 = 10;
do {
  console.log(num3);
  num3--;
} while (num3 >= 1);

// #2— Multiplation Table
let num4 =1 ;
let num5 = 12;
do{
console.log(`${num4} * ${num5} = ${num4 * num5}`);
num4++;
}while(num4<=10)