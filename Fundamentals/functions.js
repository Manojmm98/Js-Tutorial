let x = 3;
let y = 5;

// phsees of function

// define a function

// function with return statment
function add(x,y){
    return x+y;  
}


// console.log(add(x,y)); // undefined

// function without return statment

function subsctract(x,y){
   return  x-y;
}

let ans = subsctract(2,5)

// console.log(ans);

// write a function which will convert a string to number
let z ='5'
function ConvertToNumber(y){
    
    return Number(y);
}

console.log(ConvertToNumber(z));

// console.log(name);

// function can outside variable but if we want to acess
// a variable outside from the function which is define inside the function then we can not acess

function AcessName(name){
    // let name = 'man';
    // console.log(name); // 'man'
    return name;
}

// console.log(name); // undefined

// a function call without an arguments will give undefined
console.log(AcessName()); // undefined


// function expression

// function sayHi() {
//     console.log( "Hello" );
//   }


// we can store a function in avariable also
  // let sayHi = function() {
  //   console.log( "Hello" );
  // };
  function sayHi(msg){
      return msg;
  }
  
console.log( sayHi('Hello') ); // shows the function code


// functions are hoisted in javascript if you call a function before declaration 
//it will also give the expected value rather than giving undefine


function showName(name){  
    return this.name;
}

console.log(showName('Priti'));


// Arrow Function

// const addNum = (x,y)=>{
//   return x + y;
// }

const addNum = (x,y) => x+y;

console.log(addNum(3,4));




class person{
   name= this.name;
   age= this.age;
  
}

let person1 = new person('jjjj',5)
let person2 = new person('ooo',9)












