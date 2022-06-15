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
// let [name1, ...restOfNames] = names;
// console.log(name1);
// console.log(restOfNames); // ['Tobi', 'Akin']

// Destructuring in Objects
let settings = { theme: "dark", fontSize: 24, fullScreen: true };

// let { theme, fontSize, fullScreen } = settings;
// console.log(theme, fontSize, fullScreen);

// // Get the theme only and assign it to a newvariable
// let { theme: newTheme } = settings;
// console.log(newTheme);

// Use the rest operator to get the rest of the settings
let { theme: newTheme1, ...restOfSettings } = settings;
console.log(newTheme1);
console.log(restOfSettings);
