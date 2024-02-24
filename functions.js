//what is function?
// we can use function to solve any coding solution
// basically we use funtion to avoid repeated lines of code
// it's a block of code
// define a fucntion and call a function

//method and functions are same thing in java method js function
// there are two types of function, one with return type and one with
// no return type

// non return
function greet() {
    let x = 23
    console.log('Welcome to Dunia')
    console.log('Welcome to Dunia')
    console.log('Hammas is so talkative')
    console.log(4 + x)
}

greet();

//return function
function getName() {
    let a = 'Ant'
    let b = 'or'
    const name = a + b
    return name;
}
// getName = name and name = Antor
console.log(getName());

//return function for boolean

function getTrueOrFalse() {
    let value;
    if ( 1 > 2) {
        value = true;
    } else {
        value = false
    }
    return value;
}

// getTrueOrFalse = false

console.log(getTrueOrFalse())

// return function
function getNetProfit () {
    let sales = 20000;
    let COGS = 12000;
    let tax = 1500;
    let np = sales - COGS - tax
    return np;
}
// getNetprofit() = 6500
let netProfit = getNetProfit();
console.log(netProfit)

// return function with arguments or parameter
function getProfit (sale, cogs) {
    let sales = sale;
    let COGS = cogs;
    let tax = 1500;
    let np = sales - COGS - tax;
    return np;
}

let nProfit = getProfit(10000, 5000)
console.log("Net Profit: " +nProfit)



function getCars(country) {
    let cars = [['American', 'Escalade', 'Dodge', 'Ford'],
    ['Japanese', 'Toyota', 'Honda', 'Nissan'], ['Italian', 'Ferrari', 'Lambo', 'Alpha Romeo']];
    //cars[0] = ['American', 'Escalade', 'Dodge', 'Ford']
    //cars[1] = ['Japanese', 'Toyota', 'Honda', 'Nissan']
    //cars[2] = ['Italian', 'Ferrari', 'Lambo', 'Alpha Romeo']
    
    if (cars[0][0] === country) {
        return cars[0]
    } else if (cars[1][1] === country) {
        return cars[1]
    } else {
        return cars[2]
    }
}

console.log(getCars('Italian'));
