// BONUS TWO 

let person = {
    name: 'Andres Felipe Silva',
    age: 21,
    city: 'Bogota',
    profession: 'Student',
    hobbies: [
        'Paint', 'Play', 'Watch tv'
    ]
}
console.log(person); // Print all of the object 
let space = ' '
function greet(person) {
    return 'My name is: ' + person['name'] + space + 'i am ' + person['age'] + space + 'year old ' + 'and I life in: ' + person['city']
}
let message = greet(person)
console.log(message);
console.log(person['hobbies']);

// let hobbies = ['play', 'listen'] 
for (let i = 0; i < person['hobbies'].length; i ++){
    console.log(person['hobbies'][i]);
}   