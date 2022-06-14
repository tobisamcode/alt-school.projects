// create a map
let userMap = new Map();

// Add values to the map
userMap.set(1, "An integer key");
userMap.set(true, "A boolean key");

let mary = { name: "Mary", age: 20 };

userMap.set(mary, "An object key");

console.log(userMap);
