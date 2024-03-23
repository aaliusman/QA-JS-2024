

// Arrays are often used in programming because they are a simple and
//  efficient way to store data. 
// list of item store in one variable

//empty array

let fruits = [];
fruits.push('Apple', 'Banana', 'Banana', 'Banana')
fruits.push('Banana')
fruits.push('Mango')
// fruits = ['Apple', 'Banana', 'Mango']
console.log(fruits[1])
console.log(fruits.length)// 3
console.log(fruits[1]) // Banana
console.log(fruits[2]) // Banana


// let names = 'Usman'
let names = ['Usman', 'Antor', 'Hammas', 'Aaniq']
console.log('Datatype of names' + typeof names)
console.log(names.length)
console.log(names)

// index always start with 0
console.log(names[1] + names[0] )
console.log(names[0])
console.log(names[2])
console.log(names[3])

let numbers = [16, 17, 19, 23, 45, 56]
console.log(numbers.length)
console.log(numbers[3])

for (let i = 0; i < 6; i++) {
    console.log(numbers[i])
}

let age  = [16, 17, 19, 23, 34, 45, 46, 67]
console.log(age.length)
console.log(age[3])

for (let i = 0; i < age.length; i++) {
    console.log(age[i])
}


//object computer and bank, will have differet properties
//how do you represent object in javascript
//object literal

let input = 'city';

//keys and value pair
let alien = {
    name: 'Usman',
    tech: 'JS',
    city: 'Langhorne',
    zipcode: 19047   
}

console.log(alien)
console.log(alien.city)
console.log(alien.zipcode)
console.log(alien[input])


// complex object
let student = {
    name: 'Zayan',
    school: 'Albert Schweitzer',
    tech: 'Python',
    laptop: {
        ram: '16gb',
        cpu: 'i7',
        brand: 'MacBook'
    }
}

console.log(student.laptop.brand.length)
console.log(student.laptop.ram)
console.log(student.school)
console.log(student.laptop.brand)


// how to to split the string
const str = 'Hello,World,How,Are,You,Swiss,Anything';
const split_str = str.split(',');
console.log(split_str)
console.log(split_str.length)
console.log(split_str[6])
console.log(str)

const strng = 'Tech World Is Here';
const strngg = strng.split(' ')
console.log(strngg[3])

const strnggg = 'Tech World Is Here';
const st = strnggg.split('I')
console.log(st)
//['Tech world ', 's Here']

const strnggg2 = 'Tech World Is HIere';
const st2 = strnggg2.split('I')
console.log(st2)
console.log(st2[2]);
console.log(strnggg2.length);
console.log(strnggg2[3]);


const fruitss = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extract a section from index 1 to index 3 (exclusive)
const slicedFruits = fruitss.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'cherry']

