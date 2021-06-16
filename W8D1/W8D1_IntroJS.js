// Intro JavaScript Problems (Part 1)

function mysteryScoping1() {
  // Same function scope, x is initialized tiwce
  // Initial Code: var x = 'out of block';
  // Fix: change var into const
  const y = 'out of block';

  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(y);
}


function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';   // var respects block scoping, changed from var to const for x
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  x = 'out of block again'; // this is initialized again. remove the let
  console.log(x);
}


/* 
madLib

Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

*/
const madLib = (verb, adj, noun) => {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
}

madLib('make','best','guac');


/*  NEXT PROBLEM:

isSubstring

Input

    1) A String, called searchString.
    2) A String, called subString.

Output: A Boolean. true if the subString is a part of the searchString.

> isSubstring("time to program", "time")
true

> isSubstring("Jump for joy", "joys")
false


*/

const isSubstring = (searchString, subString) => {
  if (searchString.includes(subString)) {
    console.log('TRUE');
    return true;
  } else {
    console.log('FALSE');
    return false;
  }
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");


/*  Phase 2 - looping constructs
fizzBuzz

3 and 5 are magic numbers.

Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.


*/

const fizzBuzz = (numbers) => {
  const fizzy = []
  for(let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) || (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0)) {
      fizzy.push(numbers[i]);
    }
  }
  console.log(fizzy);
  return fizzy;
}

fizzBuzz([1,2,3,4,5,6,7,8,9,15]);


const isPrime = (number) => {
  if (number < 2) { // edge case 
    return false;
  }

  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      //console.log("This number is not prime but choice");
      return false; 
    }
  }

  //console.log("This number is prime!");
  return true;

}

isPrime(2) // true
isPrime(15485863) // true
isPrime(3548563) // false
isPrime(10) // false

/* Next Problem

sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.

*/


const sumOfPrimes = (number) => {
  let counter = 0;
  let sum = 0;
  let i = 2

  while (counter < number) {
    if (isPrime(i) === true) {
      sum += i;
      counter++;
    } 
    i++;
  }

  console.log(sum);
  return sum;

}

sumOfPrimes(4);
