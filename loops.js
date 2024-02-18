//what is loop? while loop, do while, for 
// repeat this statement 5 times
// while loop, do while loop and we have for loop

// initialize, condition, increment/decrement
// always try to use i or x as variable name in loop

// infinite loop meaning never stopping
let i = 1;

while (i <= 5) 
{
    console.log('Bangladesh')
    i++;
}
console.log(i)

// reverse order forloop
// while loop will check condition first then perform action
while (i >= 2) 
{
    console.log('Bensalem')
    let a = 'Ali';
    let y = false;
    let text = "lakfjlaksjflkasdjflkjdl";
    i--;
}
console.log(i)

let x = 1
// do while will perform action and then check condition
do {
    console.log('do while loop')
    x++;
} while ( x <= 2);

//forloop
// initialize, condition, increment/decrement

// print one to 10
for (let i = 1; i < 11; i++) {
    console.log(i)
}

for (let i = 10; i < 13; i++) {
    console.log(i)
}

// derement forloop example
for (let i = 5; i >= 1; i--) {
    console.log(i)
}


//Nested forloop
for (let i = 0; i < 2; i++) {
    console.log('print ' + i)
    for (let x = 1; x < 3; x++) {
        console.log('******' + x)
    }
}
//output should be
// print 0
// *****1
// *****2
// print 1
// *****1
// *****2

let numberOfStore = 10;

for (let i = 2; i < 3; i++) {
    console.log(i)
    if (numberOfStore < 9) {
        console.log(numberOfStore)
    }
}

console.log('@@@@@@')
for (let i = 2; i < 4; i++) {
    console.log(i)
    if (numberOfStore > 9) {
        console.log(numberOfStore)
        numberOfStore++;
    }
}
// output
//2
//10
//3
//11


