
let x = 5; // he is a child

let y =18; // adult

let z = 50; // old

// if else

if(x > 10){
    console.log('child');
}
else{
    console.log('not child');
}

// condtional opretor

let ans = x > 10 ? true : false; 
console.log(ans);

// nested if else

if(x>10){
  console.log('not child');
}
else if(y>10){
    console.log('not child');
}
else if (z>10){
    console.log('not child');
}
else{
    console.log('not a human');
}

// nested if else in conditional opreator

let value = x>10 ? 'notchild' : y>10 ? 'not child' : z>10 ? 'not child' : 'not a human'