// create a map
let userMap = new Map();

// Add values to the map
userMap.set(1, "An integer key");
userMap.set(true, "A boolean key");

let mary = { name: "Mary", age: 20 };

userMap.set(mary, "An object key");

// console.log(userMap);

// // Display the keys
// console.log(userMap.keys());

// // Display the values
// console.log(userMap.values());

// // Display the entries
// console.log(userMap.entries());

// // Display the size
// console.log(userMap.size);

// // check if a key exist
// console.log(userMap.has(1));

// //Remove a kkey
// userMap.delete(1);
// console.log(userMap);

// Iterate over the map
// for (let entry of userMap) {
//   console.log(
//     `The key is ${JSON.stringify(entry[0])} and the value is ${entry[1]}`
//   );
// }

// Convert the map to an array
// let mapArray = Array.from(userMap);
// console.log(mapArray);

// // Convert the map to an object
// let mapObject = Object.fromEntries(userMap);
// console.log(mapObject);
