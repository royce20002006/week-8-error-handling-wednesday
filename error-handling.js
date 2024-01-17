// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null);
  console.log(res);
  
} catch (error) {
  console.error('Type Error');
  
}

// 2.
// tests
sayName("Alex");
sayName(1);

function sayName(name){
  try {
    if (typeof name !== 'string') throw new TypeError('Invalid Name! Must be a string!')
    console.log(name);
  } catch (error) {
    console.error(error.message);
    
  }
  
}

try {
  greet('')
} catch (error) {
  console.log('Hello World!')
}
// Your code here 
// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  } 

  console.log(greeting);
}

