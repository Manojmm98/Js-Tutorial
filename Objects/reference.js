let city = 'Cuttack';
let place = city // The value of city directly pass to place


let details = {
     place : 'BBsr'
}

let adress = details // the refrence of details pass to adress not the value

adress.place = 'Balasore';

// console.log(details);


let c = {};
let d = c;
console.log(( c === d )); // true

let a = {}; // ---> 5k
let b = {}; // ---> 6k  // two independent objects

console.log(( a === b )); // false


let user = {
    name: "John",
    age: 30
  };
  
let clone = {}; 

for(let details in user){
    clone[details] = user[details] ;
}

// Object.assign(clone,user)
// let clone = Object.assign({},user)

// let result = {...user}

clone.name = 'pete'

console.log(clone.name);
console.log(user.name);


// Nested Object

let prop = {   // 11k  --> sizes --> 23k->sizes{ height : 50 width:50}
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

let user2 = {
     // 11k 23k->sizes{ height : 50 width:50}
}
 
for(let val in prop){
     user2[val] = prop[val]
  }

// user2.sizes.height = 40
console.log(prop)

// structured clone


let user3 = structuredClone(prop);

user3.sizes.height= 90;

console.log(prop.sizes.height);
console.log(user3.sizes.height);


//The structuredClone method 
//can clone most data types, such as objects, arrays, primitive values.
// stuctured clone can not copy functions and methods


  
