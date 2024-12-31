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
console.log("----------------------");
// #2— Multiplation Table
let num4 = 1;
let num5 = 12;
do {
  console.log(`${num4} * ${num5} = ${num4 * num5}`);
  num4++;
} while (num4 <= 10);

console.log("----------------------");
/*
Functions :-
*/

//#1 can use the app or not !
function nameAndAge(name, age) {
  if (age <= 18) {
    return `sorry ${name} you can't use the app`;
  } else {
    return `Hi ${name} your age is ${age} you can use the app`;
  }
}
console.log(nameAndAge("hagar", 19));
console.log(nameAndAge("sara", 16));

console.log("----------------------");
//#2 check if the number is positve or negative or 0
function checkNumber(number) {
  if (number === 0) {
    return "Number=0";
  } else if (number > 0) {
    return "the Number is positve ";
  } else if (number < 0) {
    return "the Number is negative ";
  } else {
    return "Is not a number please enter a number..";
  }
}
console.log(checkNumber(6));
console.log(checkNumber(0));
console.log(checkNumber(-6));
console.log(checkNumber("add"));

console.log("----------------------");

//#3 print your name
let yourName = function (name) {
  return name;
};
console.log(yourName("hagar"));

console.log("----------------------");
//#3 check if the number is positve or negative or 0
function checkNumber(number) {
  if (number === 0) {
    return "Number=0";
  } else if (number > 0) {
    return "the Number is positve ";
  } else if (number < 0) {
    return "the Number is negative ";
  } else {
    return "Is not a number please enter a number..";
  }
}
console.log(checkNumber(6));
console.log(checkNumber(0));
console.log(checkNumber(-6));
console.log(checkNumber("add"));
console.log("----------------------");
//#4 Calculator Porgram
function Calculator(num6, num7, opertion) {
  if (opertion === "+") {
    return num6 + num7;
  } else if (opertion === "-") {
    return num6 - num7;
  } else if (opertion === "*") {
    return num6 * num7;
  } else if (opertion === "/") {
    if (num7 === 0) {
      return "Error Division by Zero is not Allowed !";
    }
    return num6 / num7;
  } else {
    return "Error: Unknown opertion!";
  }
}
console.log(Calculator(20, 10, "+"));
console.log(Calculator(20, 10, "-"));
console.log(Calculator(20, 10, "*"));
console.log(Calculator(20, 10, "/"));

console.log("----------------------");
/*
Object :-
*/

//#1 book information
/*
title
author 
year
genre
pages
publisher
languge
rating
*/

let book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  genre: "Self-help",
  pages: 320,
  publisher: "Penguin Random House",
  languge: "English",
  rating: 4.8,
};
console.log(book.author);
console.log(book.rating);
console.log(book);

console.log("----------------------");

//#2 Person information
/*
fristName
lastName
birthYear
professtion
address
college
*/
let Person = {
  fristName: "Hagar",
  lastName: "Saeed",
  birthYear: 2005,
  professtion: "Student",
  address: "Alex:elbhera:badr",
  college: "technology",
};
console.log(Person.fristName);
console.log(Person.birthYear);
console.log(Person);

console.log("----------------------");

//#3 moive information
/*
title
director
year
genre
duration
rating
cast
*/
let moive = {
  title: "Smile",
  director: "Parker Finn",
  year: 2022,
  genre: "Horror, Thriller",
  duration: 115,
  rating: 6.6,
  cast: ["Sosie Bacon", "Kyle Gallner", "Caitlin Stasey"],
};
console.log(moive.title);
console.log(moive.genre);
console.log(moive);

console.log("----------------------");

//#4 product Description
/*
  name
  brand
  price
  inStock
  specifications: {
    screen
    camera
    battery
    }
*/
let product = {
  name: "Smartphone",
  brand: "Samsung",
  price: 799,
  inStock: true,
  specifications: {
    screen: "6.5 inches",
    camera: "48 MP",
    battery: "4000 mAh",
  },
};

console.log(product.name);
console.log(product.specifications);
console.log(product);

console.log("----------------------");