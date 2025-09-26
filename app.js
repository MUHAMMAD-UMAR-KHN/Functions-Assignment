//--------------------------chap 35 - 38---------------------

//Q1

function dateAndTime() {
    var date = new Date();
    console.log(date.toString());
}
DateAndTime();




//Q2

function fullName(firstName, lastName) {
    var fullName = firstName + lastName;
    console.log("Hello", firstName, lastName);
}
fullName(prompt("Enter fisrt name: "), prompt("Enter last name: "));





//Q3

function add(a, b) {
    var sum = a + b;
    console.log("The sum of numbers is", sum);
}
add(prompt("Enter the first number"), prompt("Enter the second number"));




//Q4

function calculator(num1, num2, operator) {
    if (operator == "+") {
        console.log("the Sum of the numbers is:", num1 + num2);
    }
    else if (operator == "-") {
        console.log("the Difference of the numbers is:", num1 - num2);
    }
    else if (operator == "x") {
        console.log("the Product of the numbers is:", num1 * num2);
    }
    else if (operator == "/") {
        console.log("the Division of the numbers is:", num1 / num2);
    }
}
calculator(+prompt("Enter the first number"), +prompt("Enter the second number"), prompt("Enter the operator: "));




//Q5

function square(number) {
    var squares = number * number;
    console.log("The squae of the number is", squares);
}
square(+prompt("Enter the number: "));




//Q6

function factorial(number) {
    var factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${number} is ${factorial}`);
}
factorial(+prompt("Enter the number: "));




//Q7

function counting(startingNumber, endingNumber) {
    var countingList = [];
    for (let i = startingNumber; i <= endingNumber; i++) {
        countingList.push(i);
    }
    console.log(`The Counting between ${startingNumber} and ${endingNumber} is ${countingList.toString()}`);
}
counting(+prompt("Enter the starting number: "), +prompt("Enter the ending number: "));





//Q8

var base = +prompt("Enter the Base: ");
var perpendicular = +prompt("Enter the Perpendicular: ");
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    console.log(`The hypotenuse is ${hypotenuse}`);
}

calculateHypotenuse(base, perpendicular);





//Q9

var width = +prompt("Enter the width: ");
var height = +prompt("Enter the height: ");
function area(width, height) {
    var area = width * height;
    console.log("The area is", area);
}
area(width, height);





//Q10

var word = prompt("Enter the word: ");
function palindromeChecker(word) {
    word = word.toLowerCase();
    var reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
        console.log("The word is a palindrome");
    } else {
        console.log("The word is not a palindrome");
    }
}
palindromeChecker(word);




//Q11

function upperCaseLetterConverter(statement) {
    var sentence = statement.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }

    var converted = sentence.join(" ");
    console.log(converted);
}
upperCaseLetterConverter(prompt("Enter the statement: "));





//Q12

function longestWordChecker(sentence) {
    var exString = sentence.split(" ");
    var longestWord = exString[0];

    for (let i = 1; i < exString.length; i++) {
        if (exString[i].length > longestWord.length) {
            longestWord = exString[i];
        }
    }

    console.log("The longest word is", longestWord);
}

longestWordChecker(prompt("Enter the sentence: "));





//Q14

var radius = +prompt("Enter the radius: ");
var pie = 3.142;
function calcCircumference(radius) {
    var circumference = 2 * pie * radius;
    return circumference;
}

function calcArea(radius) {
    var area = pie * (radius * radius);
    return area;
}
var calulatedCircumference = calcCircumference(radius);
var calculatedArea = calcArea(radius);
console.log(`the Circumference is ${calulatedCircumference}`);
console.log(`the Area is ${calculatedArea}`);





//------------------------ch 38 - 42------------------------

//Q1

function power(base, exponent) {
    var powerCalc = Math.pow(base, exponent);
    console.log(powerCalc);
}
power(+prompt("write the base: "), +prompt("write the exponent: "));





//Q2

function leapYear(year) {
    if (year % 4 == 0) {
        console.log("The year is a leap year.");
    } else {
        console.log("It is not a leap year.");
    }

}
leapYear(+prompt("Enter the year: "));




//Q3

var a = +prompt("Enter a length of side 1: ");
var b = +prompt("Enter a length of side 2: ");
var c = +prompt("Enter a length of side 3: ");
function semiperimeter(a,b,c) {
    return (a + b + c) / 2;
}
function areaOfTriangle(a,b,c){
    var semiPerimeter = semiperimeter(a,b,c);
    var areaOfTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)).toFixed(2);
    return areaOfTriangle;  
}
var result = areaOfTriangle(a,b,c);
console.log("Area of triangle is",result);





//Q4

function mainFunction(marks1,marks2,marks3){
    var totalMarks = marks1 + marks2 + marks3;
    var average = Average(marks1,marks2,marks3);
    console.log(`The average of the marks is ${average}`);
    var percentage = Percentage(marks1,marks2,marks3);
    console.log(`The percentage of the student is ${percentage.toFixed(2)}`);
    return totalMarks;
}
mainFunction(+prompt("Enter first subject marks: "),+prompt("Enter second subject marks: "),+prompt("Enter third subject marks: "));

function Average(marks1,marks2,marks3){
    var noOfSubjects = 3;
    var averageMarks  = (marks1+marks2+marks3) / noOfSubjects;
    return averageMarks;
}

function Percentage(marks1,marks2,marks3){
    var obtainedMarks = marks1 + marks2 + marks3;
    var totalMarks = 300;
    var percentage = (obtainedMarks/totalMarks) * 100;
    return percentage;
}




//Q6

function vowelsDelFunc(sentence) {
    var sentenceLength = sentence.length;
    var vowelsFreeSen = "";

    for (let i = 0; i < sentenceLength; i++) {
        let character = sentence[i];
        if (character !== "a" && character !== "e" && character !== "i" && character !== "o" && character !== "u") {
            vowelsFreeSen = vowelsFreeSen + character;
        }
    }

    console.log("The given sentence without vowels:", vowelsFreeSen);
}

vowelsDelFunc(prompt("Enter the sentence: ").toLowerCase());





//Q9

var hours = 40;
var overtimePay = 12;
function overtimeCalculator(hoursWork,overtimeHours){
    if(hoursWork > hours){
        var overtimePayment = overtimePay * overtimeHours;
        console.log(`The overtime payment of the worker will be ${overtimePayment}`);
    }
    else{
        console.log("worker is not eligible for overtime pay.")
    }
}
overtimeCalculator(+prompt("Enter the hours that employee work: "),+prompt("Enter the overtime hours: "));





//Q8

var distance = +prompt("Enter the distance in kilometers: ");
function meters(distance){
    var meters = distance * 1000;
return meters;
}
function feets(distance){
    var feets = distance * 1000 * 3;
return feets;
}
function inches(distance){
 var inches = distance * 39370;
 return inches;
}
function centimeters(distance){
 var centimeters = distance * 1000 * 100;
 return centimeters;
}
var meter = meters(distance);
var feet = feets(distance);
var inch = inches(distance);
var centimeter = centimeters(distance);
console.log(`The ${distance} km is equal to ${meter} meters.`);
console.log(`The ${distance} km is equal to ${feet} feets.`);
console.log(`The ${distance} km is equal to ${inch} inches.`);
console.log(`The ${distance} km is equal to ${centimeter} centimeters.`);



