// CHAPTER NO 1 ALERT:

// Alert these following (individually):
alert("Muhammad Arsalan");
alert("Arain");
alert("arainarsalan764@gmail.com");
alert("03042794089");
alert("Password");

// Alert these following (individually):
alert("You're learning JavaScript");

// Code an alert statement displaying any message you like.
alert("Welcome to the Jawan Pakistan");

// Chapter 2 (Variables for string)

// Declare any variable in the camelCase format.
var myName = "ArsalanArain";
// console.log(myName)

// Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.
var myName;
myName = "Arsalan, Arain";

// Declare the variable teamName and Alert your Team name.
var teamName = "Develpor team";
alert(teamName);

// This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string.
var bestMan = "Arsalan";
alert(bestMan)

// Chapter 3 (Variables for numbers)

// Declare a variable “caseQty”
var caseQty;

// Assign to the variable caseQty, which has already been declared,
// the value 144.
var caseQty;
caseQty = 144;

// Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
var num = 9;

// In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.
var sumResult;
sumResult = 3 + 5;
alert(sumResult)

// What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

// In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
var myNumber = 10;
myNumber = myNumber + 5;
console.log(myNumber);

// Chapter 4 (Variable names Legal and Illegal)

// Correct this statement.
// var product cost = 3.45;
var productCost = 3.45;
console.log(productCost);

// Rewrite this using camelCase.
var nameOfBand;
console.log();

// In a single statement declare a legally-named variable and assign a
// number to it.
var myNumber = 36;
console.log(myNumber);

// Declare a variable that is a combination of your first and last
// names. Use camelCase.
var firstName = "Arsalan";
var lastName = "Arain";
var fullName = firstName + lastName;
console.log(fullName)

// // list the legal and illagal values
// var myValue //(legal)
// var 123val =4  //(illagl)
// var $abc= "hello world" //(legal)
// var _abc= "hello world" //(legal)
// var alert = "hey"

// Chapter 5 (Math Expression I)

// 1. What is the name and symbol of the arithmetic operator that
// gives you the remainder when one number is divided by another?
var dividend = 17;
var divisor = 5;
var remainder = dividend % divisor;
console.log(remainder); // Output: 2

// What is the value of num?
var num = 20 % 6;
console.log(num); // output: 2

// In a single statement, declare the variable largeNum and assign it
// the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;
console.log(largeNum);

// Assign to a variable the value represented by one variable
// subtracted from the value represented by another variable
var firstNumber = 10;
var secondNumber = 5;
var difference = firstNumber - secondNumber;
console.log(difference);

// Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.
var dividend = 27;
var divisor = 4;
var remainder = dividend % divisor;
console.log(remainder);

// Code an alert that displays the result of a multiplication on 2
// numbers.
var number1 = 5;
var number2 = 10;
var multiplicationResult = number1 * number2;
alert("The result of the multiplication 2 number is: " + multiplicationResult);

// Chapter 6 (Math Expression II)

// Code a short form of x = x + 1; Use either of the two legal
// expressions.
x += 1;

// If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?
x -= 1;

// What is the value of y?
var x = 50;
var y = x++;
alert(y); // Output: 50

// What is the value of z?
var y = 50;
var z = --y;
alert(z); //output: 49

// In a single statement, decrement num and assign its original value
// to newNum.
var num = 10;
var newNum = --num;
alert(newNum);

// In a single statement add 1 to a variable and assign its original
// value to another variable.
var originalVariable = 10;
var newVariable = originalVariable++;
alert(newVariable);

// Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert
var myNumber = 3;
myNumber++;
alert("The new value is: " + myNumber);

// Chapter 7 (Math Expression III)

// What is the value of calculatedNum?
var calculatedNum = 2 + (2 * 6);
alert(calculatedNum); //output: 14

// What is the value of calculatedNum?
var calculatedNum = (2 + 2) * 6;
alert(calculatedNum); //output: 24

// What is the value of calculatedNum?
var calculatedNum = (2 + 2) * (4 + 2);
alert(calculatedNum); //output: 24

// What is the value of calculatedNum?
var calculatedNum = ((2 + 2) * 4) + 2;
alert(calculatedNum); // output: 18

// Chapter 8 (Concatenating Text Strings)

// What is the value of num? Include quotation marks.
var num = "2" + "2";
alert(num); //output: 22;

// What is the value of message? (Include the quotation marks.)
// Alert the statement
var message = ("Hello," + "Arsalan");
alert(message); //output: Hello,Arsalan

// What message displays in the alert box?
alert("23" + 4); //output: 234

// Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".
var word1 = "Pakistan";
var word2 = "Zindabad";
var result = word1 + " " + word2;
alert(result); //output Pakistan zindabad

// Write a statement that assigns to a variable the concatenation of
// a string with a number
var result = "The number is: " + 24;

// Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.
var string1 = "Hello";
var string2 = "world";
var concatenate = string1 + " " + string2;
alert(concatenate); //output: Hello world

// Chapter 9 (Prompts)

// Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
let firstName = prompt("Enter first name", "Arsalan");
alert("Arsalan");

// Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.
var country = prompt("Country?", "Pakistan");
alert("pakistan");

// Correct this statement
// var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");
alert("Arsalan");

// Code a prompt that specifies a string as the message Include a
// default input.
var response = prompt("Please enter your favorite color:", "Blue");
alert("Blue");

// Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.
var question = "What is your favorite colour?";
var defaultResponse = "Black";

var userResponse = prompt(question, defaultResponse);

// Display a prompt, including both a message and a default
// response.
// // Display the user's response in an alert.
var question = "What is your favorite color?";
var defaultResponse = "Black";

var userResponse = prompt(question, defaultResponse);

alert("Your favorite color is: " + userResponse);

// Chapter 10 (if statments)

// var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City of Lights");
}

// This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable
if (x === y) {
    var z = prompt("Please enter the value of z:");
}

//   Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

//   Code an if statement. Test whether a variable has a particular
//   numerical value. If so, assign a new value to that variable, as in
//   x = 1;
if (x === 1) {
    x = 2; // Assigning a new value to variable x
}

//Chapter 11 (Comparison Operators)

// Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)
var x = 5;
var y = "5";

if (x !== y) {
    console.log("x is not equal to y");
} else {
    console.log("x is equal to y");
}

// Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
var x = 5;
var y = 3;

if (x >= y) {
    console.log("x is greater than or equal to y");
} else {
    console.log("x is less than y");
}

// Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
if (x !== 10) {
    x = 20; // Assigning a new number to variable x
}

// Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.
if (x !== y) {
    alert("Congratulations!");
}

// Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"
var enterYourName = prompt("Enter your first name:");

if (enteredName !== "Arsalan") {
    alert("No match");
}

// Chapter 12 (if...else and else if statements)

// Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.
var a = 10;
var b = 5;
if (a >= b) {
    alert("a is greater than or equal to Variable b.");
} else {
    alert("a is less than b.");
}

// Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)
var perc = +prompt("Enter Your perc");
if (perc < 100 && perc >= 80) {
    document.write("your Grade is A+");
}
else if (perc < 80 && perc >= 70) {
    document.write("your Grade is A");
}
else if (perc < 70 && perc >= 60) {
    document.write("your Grade is B");
}
else if (perc < 60 && perc >= 50) {
    document.write("your Grade is C");
}
else if (perc < 50 && perc >= 40) {
    document.write("your Grade is D");
}
else if (perc < 40 && perc >= 0) {
    document.write("Fail");
}
else {
    document.write("Invalid Input")
}

// This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// __
// Note: Try this by yourself
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.
var inputcity = prompt("Enter City name");
document.write(inputcity);
inputcity = inputcity.toUpperCase;
var cities = ["Karachi", "Lahore", "Peshwar", "Islamabad"];

// Chapter 13 (Testing sets of conditions)

// Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.
if (a === b && c === d) {
}

// Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.
if (a === b, c !== d) {
}

// Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
if ((name === "Hamza", name === "Arsalan") && age < 60) {
}

// Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
var a = 5;
var b = 10;

if (a < b, a > b) {
    alert("The condition is true. The first variable is less than or greater than the second variable.");
}

// Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.
var firstName = "Arsalan";
var lastName = "Arain";

var enterFirstName = prompt("Enter your first name:");
var enterLastName = prompt("Enter your last name:");

if (enterFirstName === firstName && enterLastName === lastName) {
    alert("Name matched!");
}

// Chapter 14 (If statements nested)

// Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".
var password = prompt("Enter your password:");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5.")
    }
    else {
        alert("Ok")
    }
}

// Try this statement by yourself
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.
var a = 5;
var b = 5;
if (a === b) {
    if (a <= b) {
        alert("Both conditions passed!");
    }
}

// Chapter 15 (Array I)


// Declare an empty array.
var emptyArr = [];

// Code an array with 1 string element
var arr = ["Arsalan", "Arain"]
console.log(arr)

// var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);


// var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// // length of array.
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

// Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
var arr = ["a"];
arr[1] = "b";
alert("c: " + arr[1]);

// // Chapter 16 (Array II)

// Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
var arr = ["First Element"];
arr.push("Second Element");
alert("Last element: " + arr[arr.length - 1]);

// aar Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
var alphabet = ["h", "i", "j", "k"];
var removedElement = alphabet.pop();
console.log(removedElement)

// var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
var alphabet = ["h", "i", "j", "k"];
var newElement = 123;
alphabet.push(newElement);
console.log(Alphabet);

// Chapter 16 (Array III)

// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var removedElement = sizes.shift();
console.log(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var addNumber = sizes.unshift(1, 2, 3);
console.log(sizes);

// Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
var arr = ["Apple"];
arr.unshift("Banana");
alert(arr[0]);

// Chapter 17 - 20 (for Loops)

// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, " ", "L");
console.log(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var copySizes = sizes.slice(0, 3);
console.log(copySizes);

// var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3);
pets.splice(1, 0, "elephant", "giraffe");
console.log(pets);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
var catIndex = pets.indexOf("cat");
var oxIndex = pets.indexOf("ox");
pets.splice(catIndex, 1);
pets.splice(oxIndex, 1);
console.log(pets);

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets);

// Write a statement in which loop is to run 10 times.
for (var i = 0; i < 10; i++) {
    console.log((i + 1));
}

// Write a statement in which loop is to run 10 times.
for (var i = 0; i <= 12; i++) {
    console.log(i);
  }

// What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or
// commas between them.for var i = 0 i <= 4 i++
for (var i = 0; i <= 4; i++) {
}

// Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100
// times using < to specify how many loops.
for (var counter = 0; counter < 100; counter++) {
    console.log(counter);
}

// Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many
// loops. Decrement it with each iteration.
for (var i = 3; i > 0; i--) {
    console.log(i);
  }

// The statement assigns the number of elements in the array to the
// variable.
var arr = [1, 2, 3, 4, 5];
var count = arr.length;
console.log(count);

// Set a variable named “flag” with an initial Boolean value of your
// choice.
var flag = green;

// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array pets.
var countries = ["USA", "Canada", "UK", "Germany", "France"];
for (var i = 0; i < countries.length; i++) {
}

// Coding Exercise:
// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.
for (var i = 0; i < 10; i++) {
    if (i === 1) {
      alert("Counter: " + i);
      break;
    }
  }

// Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array user names.
// Code an if statement that tests the presense of (user name) in an
// array.
// If user name match Alert that "Enter". if not then alert ("Please
// write correct user name").
var userNames = ["Hamza", "Faraz", "Arslan"]; 
var firstName = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
  if (userNames[i] === firstName) {
    alert("Welcome, " + firstName + "!");
    break; 
  }
  if (i === userNames.length - 1) {
    alert("Please write the correct user name.");
  }
}

// Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// alert("Match found");
// matchFound = true;
// break;
// }
// };
var matchFound = false;
var list = ["apple", "banana", "orange", "grape"];
var userInput = prompt("Enter a fruit");

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

// var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}