
// for(let x=10;x>=1;x--){
//     console.log(x)
// }

let x =0;
let y =100;

// console.log(x ?? y);


// add(2,3); //

// DEFINE/DECLARE FUNCTION

// argument + logic 

// call(parameter)

console.log(add(2,3));

function add(x,y){
    return x+y;
}

// arrow function

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// his city bbsr
// Remove the property name from the object.

const user ={
    name:'jhon',
    surname: 'smith',
    'his city' : 'bbsr',

}

user.name = 'pete';
delete user.name;
user['his city'] // to acess his city property