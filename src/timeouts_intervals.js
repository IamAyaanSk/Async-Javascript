// The setTimeout() function:
// It runs a particular block of code after specified time is elapsed

// setTimeout(function,duration,param1,param2...)

const greet = (name) => console.log(`Hello ${name}`);
setTimeout(greet, 2000, "Ayaan");

// Cancelling a timeout
// For cancelling a timout we first assign a variable to it in order to identify it and then use the clearTimeout()
const myTimeOut = setTimeout(greet, 3000, "John");
clearTimeout(myTimeOut);

// Intervals
// If we want to execute a block of code after a time interval we use the setInterval()

// setInterval(function,duration,param1,param2)

const discountPopUp = (discountPercent) =>
  console.log(`Extra Discount of ${discountPercent}!!`);
const myInterval = setInterval(discountPopUp, 2000, "10%");

// Cancelling an setInterval
clearInterval(myInterval);

// Timeouts and Intervals are not part of javascript itself
// Duration provided is minimum delay not guranteed delay
