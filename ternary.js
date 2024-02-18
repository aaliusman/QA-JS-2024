let numm = 15
let resultt;

// special operator ternary operator
resultt = numm%2 === 0 ? 'even' : 'odd'
console.log(resultt)

let dayy = 'Sun';
let days;

days = dayy === 'Fri' ? "It's Wednesday" : "It's friday";
console.log(days)

// switch

let day = 'Friday';

if (day === 'Monday') {
    console.log('7am')
} else if( day === 'Friday') {
    console.log('10am')
} else {
    console.log('No Alarm')
}

switch(day) {
    case 'Monday':
        console.log('7am');
        break;
    case 'Tuesday':
        console.log('8am');
        break;
    case 'Wednesday':
        console.log('5am');
        break;
    case 'Thursday':
        console.log('6am');  
        break;
    case 'Friday':
        console.log('9am'); 
        break;
    case 'Saturday':
        console.log('9am'); 
        break;
    case 'Sunday':
        console.log('11am');  
        break;
    default:
        console.log('No days found')       
}


let month = 'Feb'

switch(month) {
    case 'Jan':
        console.log('Its Jan')
        break;
    case 'Feb':
        console.log('Its Feb')
        break;
}