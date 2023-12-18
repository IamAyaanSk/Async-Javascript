// Any Function passed as an argument to another function is a callback function
// And the function which accepts a function as an argument is a high order function

const greetFn = (name) => console.log(`Hello ${name}`);

const highOrderFunction = (callbackFunction) => {
  const name = "Ayaan";
  callbackFunction(name);
};

highOrderFunction(greetFn);

// Why we need Callbacks?

// Synchronous Callback : Function is called immediately
// Example: Callback Functions passed in sort, filter, map etc

// Asynchronous Callback
// Used to resume code execution after async operation is completed
// Examples: setTimeout(), setInterval(), event handlers

// Callback Hell
// Multiple callback functions where each level depends on result of previous level
// To avoid Callback hell we use Promises
