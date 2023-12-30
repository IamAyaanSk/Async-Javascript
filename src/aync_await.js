//  async keyword
//  It is used to declare async functions. Async functions lways returns a promise

async function sayHello() {
  return "Hello";
}
// We can use then function to get actual value

// await keyword
// It is used in front of any async function to pause the code until the promise settles and returns its results.

async function sayHello2() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 1000, "Hello2");
  });

  const result = await promise;

  console.log(result);
}

// sayHello2();

// The execution of sayHello2 function pauses until the promise settles and then the result is logged. Javascript engine may do other tasks but as far the sayHello2()
// is considered, the execution pause for it

// try, catch blocks for error handling

const sayHello3 = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await data.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

// sayHello3();

// Sequential Execution

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, "Hello");
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
  });
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // This takes 2s

  const world = await resolveWorld();
  console.log(world); // This takes 1s

  // Hello World would be logged after 3s
}

// sequentialStart();

// Concurerrent Execution

async function concurrenrtStart() {
  const hello = resolveHello(); // This takes 2s
  const world = resolveWorld(); // This takes 1s and will be resolved

  console.log(await hello);
  console.log(await world);

  // Hello World would be logged after 2s
}

// concurrenrtStart();

// Parallel Execution

function parallelExecution() {
  Promise.all([
    (async () => console.log(await resolveHello()))(), // logs after 2s
    (async () => console.log(await resolveWorld()))(), // logs after 1s
  ]);
  // World Hello would be logged after 2s
}

// parallelExecution();

// We can make this function async and then await for the promise.all to stop the execution of code after it
async function parallelExecution2() {
  await Promise.all([
    (async () => console.log(await resolveHello()))(), // logs after 2s
    (async () => console.log(await resolveWorld()))(), // logs after 1s
  ]);

  // World Hello would be logged after 2s

  console.log("Finally");
}

parallelExecution2();
