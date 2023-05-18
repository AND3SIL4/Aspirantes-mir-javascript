let pedro = {
    name: "Pedro Perez",
    age: 30,
    active: true,
    hobbies: [
        "programar", "squas", "piano"
    ],
    height: 1.8
}

delete pedro.active; // Remove the propiety

const keys = Object.keys(pedro); // Const with word reserver "Object.keys"
for (let i = 0; i < keys.length; i++) { 
    const prop = keys[i];
    console.log(prop + ': ' + pedro[prop]);
} // Loop for to iteration

let name  = [
    'Andres',
    'Felipe',
    'Silva'
] // Array
let space = ' '
function greet(name){
    return 'Hello my name is: ' + space + name[0] + space + name[1]
} //Function with parameter 'name'

let greting = greet(name) // Potting in variable 'greeting' 
console.log(greting); // Print greet
