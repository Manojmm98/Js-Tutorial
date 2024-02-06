// name,age,adress,ph no,email id,>18 year above

// other way
// let person = new Object()

let person = {
    name : 'Manoj',
    age : 20,
    adress: {
        state: 'Odisha',
        dist : 'Balasore'
    },
    phNo: '12345',
    is18above: function(age){
        if(age>18){
            return true;
        }
        else{
            return false;
        }
    },
    'my height' : "5'11"

}
 person.isMan = 'fff';

person.name = 'Pratikshya';
// to delete a key and value

delete person.name;

console.log(person.name);
console.log(person.is18above(23));
console.log(person.adress.state);
console.log(person['my height']);


// to acess the property

for(let key in person){
    console.log(key);
    console.log(person[key]);
}

