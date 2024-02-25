//In JavaScript, a class, that defines how an object
//  should be constructed. It serves as a blueprint for creating objects
//  with specific properties and methods. 

//global variable
let abc = 'Global variable'
let courseList = [];

class User {
    constructor (name, email) {
        console.log('Hello new user')
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return {name: this.name, email: this.email}
    }

    enrollCourse (name) {
        courseList.push(name)
    }

    getCourseList () {
        return courseList;
    }
}

module.exports = User;