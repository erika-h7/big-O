// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// Solution #1

function addUpTo(n) {
  let total = 0;
  
  for (let i = 1; i <= n; i++) {
     
    total += i;
  }

  return total;
}

console.log(addUpTo(4));


// Solution #2

function addUpTo(n) {
  
  return n * (n + 1) / 2;
}

console.log(addUpTo(6));


// Write a function that prints all pairs

function printAllPairs(n) {
  
  for(let i = 0; i < n + 1; i++) {
    
    for(let j = 0; j < n + 1; j++) {
      
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(5));