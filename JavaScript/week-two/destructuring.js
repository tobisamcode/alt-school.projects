// Destructuring an array
let names = ["Adebayo", "Tobi", "Akin"];

let [firstName, lastName, middleName] = names;
// console.log(firstName, lastName, middleName);

// Get the first name
// let [name1] = names;
// console.log(name1);

// // Get the second name
// let [, name2] = names;
// console.log(name2);

// // Get the third name
// let [, , name3] = names;
// console.log(name3);

// Use the rest operator to get the rest of the values
let [name1, ...restOfNames] = names;
console.log(name1);
console.log(restOfNames); // ['Tobi', 'Akin']
