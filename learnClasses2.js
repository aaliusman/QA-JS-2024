// import User from './learnClasses1';

const User = require('./learnClasses1.js')

const newUser = new User('Antor', 'aliu01373@gmail.com');
console.log(newUser.getInfo())
console.log(newUser.getInfo().name);
// hello user, name and email, name
const newUser2 = new User('Antor', 'aliu01373@gmail.com');
// hello user, name and email, name, hello new user

console.log('before adding values to array')
console.log(newUser.getCourseList());

newUser.enrollCourse('Cypress')
//courseList = ['Cypress']
console.log(newUser.getCourseList())
newUser.enrollCourse('Python');
//courseList = ['Cypress', 'Python']
newUser.enrollCourse('Selenium')
// courseList = ['Cypress', 'Python', 'Selenium']
newUser.enrollCourse('Cyber Security')
// courseList = ['Cypress', 'Python', 'Selenium', 'Cyber Security']

console.log('after adding values to array')
console.log(newUser.getCourseList());

let getArrayLength = newUser.getCourseList().length;
for (let i = 0; i < getArrayLength; i++) {
    console.log(newUser.getCourseList()[i]);
}

console.log('Using foreach fucntion to print array');
let courses = newUser.getCourseList();
console.log(courses)
courses.forEach((cs) => console.log(cs))