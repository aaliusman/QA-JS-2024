console.log('Hello World')

// We commonly use let and const as data type in javascript
// when we create variables we shold have dataype and assign value variables
// Variables: A variable can be thought of as a memory location that can hold values of a specific type.
// The value in a variable may change during the life of the program—hence the name “variable

// dataype is string anything in the quote
let firstName = 'John'
console.log(firstName);

firstName = 'Muhammad';
console.log(firstName);

const lastName = 'Usman'
console.log(lastName)
// lastName = 'Salam';

let text = "Usman's number 215000"
console.log(text)

//datatype integer
let myAge = 50
console.log(myAge)

//naming conventions
//two common types of writing variables camel case and snake case
// camel case
let numOfSchool = 45;
console.log(numOfSchool)

//sanke case
let num_of_school = 45;
console.log(num_of_school)

// Arithmatic operators  + - * / %
let sales = 50 + 100;
console.log(sales)

sales = sales + 100;
console.log(sales)

sales = sales + 100
console.log(sales)

sales = sales - 200;
console.log(sales)

let newSale = 200

newSale = newSale * 2
console.log(newSale)

newSale = newSale / 4
console.log(newSale)

let remainder = 5 % 2
console.log(remainder)

remainder = 6 % 2
console.log(remainder)

remainder = 14 % 3
console.log(remainder)

remainder = 27 % 7
console.log(remainder)

remainder = 42 / 7
console.log(remainder)

remainder = 42 % 7
console.log(remainder)


// datatype with integer and string
let intStr = 'My favorite number is 16'
console.log(intStr)

// this is also called concatenation 
// + can be use for addition and concatenation
// 'a' + 'b' = ab
// '4' + '5' = 45
// 4 + 5 = 9
let sumOfTwo = 7 + 9
intStr = 'My fovarite number is: ' - sumOfTwo

// should expect to see an error NaN(Not an actual number)
console.log(intStr)

let text1 = 'I am going to'
let city = 'Dhaka'

console.log(text1 + ' ' + city)


let fName = 'Usman'

let lName = "Muhammad"

let cityName = 'Zurich'

console.log(fName + '            ' + lName + ' is from ' + cityName)

let text2 = 'Pizza'
let text3 = 'Sandwich'
let storeName = "Domino's"

console.log(text2 + ' ' + text3 + ', from ' + storeName)

let sumOfThreeNumbers = 'Hello ' + 9 + '4' + 6
console.log(sumOfThreeNumbers)
//Hello 946

let sumOfThreeNumber = 5 + 9 + 6 + '4'
console.log(sumOfThreeNumber)
//204

console.log(sumOfThreeNumber + 9)

// never try to concatenate between number and string, always try to covert
// ether string to number or number to string.
sumOfThreeNumber = '5' + 9 + 6 + '4'
console.log(sumOfThreeNumber)
//5964

//Static variable and dynamic variable 
// static doens't change and dynamic chages

// how to covert string to number
let str = "123";
console.log(typeof str)
const num = parseInt(str);
console.log(typeof num)
console.log(1 + num)


