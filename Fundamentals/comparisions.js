alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

//Strict equality

let a = '5';

let b = '5'

console.log(a == b); // true // it compares the value not types

console.log( a === b); // false // it compares both types and value

console.log( null === undefined ); // false

console.log( null == undefined ); // true