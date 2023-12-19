// Promises are used to wait for a result asynchronously. The promise is then resolved accordingly for success or failure.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If resolved we call resolve after this
    if (true) {
      resolve("The Promise was resolved");
    } else {
      reject("The Promise was rejected");
    }
  }, 2000);
});
// Resolve is a function when called changes the status of the Promise from pending to fulfilled.
// Reject is a function when called changes the status of the Promise from pending to rejected.

// myPromise.then((res) => {
//   console.log(`${res}. Yay!!`);
// });

// myPromise.catch((err) => {
//   console.log(err);
// });

// The then() function
// then(onFulfillment, onRejection) We can pass both callback function to then but catch() is preferred because we can handle exception throwed by callback function

// Chaining Promises
// Chaining helps to overcome the caallback hell situation
// Each then and catch function returns a promise themselves which is resolved again using another then().

myPromise
  .then((res) => {
    console.log(`${res}. Yay!!`);
    return "Result";
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.all()
// It takes an iterable of promises and returns a sngle Promise which when rersolved gives an array of the results of the input promises
// It rejects immediately after any input promise rejects.

const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, "Resolved");
});

Promise.all([promise1, promise2]).then((result) => console.log(result));

// Promise.allSettled()
// It returns when all promises gets completed whether they are resolved or rejected

const promise3 = Promise.reject("error");
const promise4 = new Promise((resolve) => {
  setTimeout(resolve, 100, "Resolved");
});

Promise.allSettled([promise3, promise4]).then((result) => console.log(result));

// Promise.race()
// It returns promise as soon as any of the promise resolves or rejects.

const promise5 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Resolved");
});
Promise.reject("error");
const promise6 = new Promise((resolve) => {
  setTimeout(resolve, 100, "I was Resolved first");
});

Promise.race([promise5, promise6]).then((result) => console.log(result));
