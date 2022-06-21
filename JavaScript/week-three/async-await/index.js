const url = prompt("Enter a URL");

async function getData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

(async () => {
  const result = await getData(url);
  console.log("Success!", result);
})();

// getData(url)
//     .then((result) => {
//         console.log("Success!", result);
//     }).catch(status => {
//         console.log(`An error with status code ${status} occurred: `);
//     });

//Technically, the getData function is asynchronous, and we can do the following:
// await getData(url) but we can't do that here because await is only valid within an async function.

// await getData(url) // Won't work because await is only valid within an async function.

// A trick is to wrap the function in an IIFE async function.
// (async () => {
//   const result = await getData(url);
//   console.log("Success!", result);
// })();

//Handling errors
// When using async/await, you can use try/catch to handle errors.
// The catch block will run if an error occurs.
