
//constructor: special method for defining the properties and 
//             method of object. constructor automatically called
//              whenever we craeta a new object for class.            

//Template literals
const car1 = {
    make: 'Cadilac',
    model: 'Escalade',
    year: '2024',
    color: 'Pink lol',
    drive: function () {
        console.log(`You drive ${this.model}`)
        // console.log('You drive ' + this.model)
    }
}

car1.drive();
console.log(car1.make)
// console.log(car1)


const car2 = {
    make: 'Volvo',
    model: 's90',
    year: '2024',
    color: 'Black',
    drive: function () {
        console.log(`You drive ${this.year}`)
    }
}

car2.drive();
console.log(car2.make)

const car3 = {
    make: 'Mercedes',
    model: 'G-Wagon',
    year: '2024',
    color: 'White',
    drive: function () {
        console.log(`You drive ${this.color}`)
    }
}

// object
// array and list 
let ar = [1, 3, 4]

car3.drive();
console.log(car3.make)

//constructor
function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function() {
        console.log(`You drive the ${this.model}`)
    }
}

const carA = new Car('BMV', 'X7', '2024', 'Blue')
console.log(typeof carA);
carA.drive();

const carB = new Car('Toyota', 'Camry', '2024', 'White')
console.log(typeof carB);
carB.drive();
console.log(carA.make)
console.log(carB.year)

// const car2 = new Car('Merecedes', 'G-Wagon', 2024, 'Grey')
// console.log(car2.model)
// console.log(car2.color)

// car1.drive();
// car2.drive();

// let dri = function () {
//     console.log('Hello world')
// }

// dri();