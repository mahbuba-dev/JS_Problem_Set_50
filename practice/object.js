// Count Object Properties
//Task: Return the number of properties in the object.

const user = {
  name: "Mahbuba",
  age: 30,
  country: "USA"
};
let user2 = {}
console.log(Object.keys(user).length);
console.log(user['name']);
user2['age'] = user['age']
user2['amrNam'] = 'mahbubamahi'
console.log(user2);


//Task: Return an array of all keys.
const results = Object.keys(user)
console.log(results);

//Return all values in an array.
const valueArray = Object.values(user)
console.log(valueArray);



//Write a function that checks whether "grade" exists.

const student = {
  name: "Sara",
  grade: "A"
};

function checkGradeExists(obj){
//  const results = Object.keys(obj)
//  if(results.includes('grade')){
//     return true
//  }
//  else {
//     return false
//  }
return Object.keys(obj).includes('grade')
}

console.log(checkGradeExists(student));





//Return the sum of all scores.
const scores = {
  math: 90,
  english: 80,
  science: 85
};


function sumAllValues (obj){
    let count = 0
  const values = Object.values(obj)
  for(const value of values){
    count = count + value
  }

  return count
}
console.log(sumAllValues(scores));



/**
 * Convert Object to Array
const obj = {
  a: 1,
  b: 2
};

Task: Convert it to:

[
  ["a", 1],
  ["b", 2]
]
 */


const obj = {
  a: 1,
  b: 2
};

const array = Object.entries(obj).flat(Infinity)

console.log(array);



/**
 * 7. Find the Largest Value
const prices = {
  apple: 3,
  banana: 1,
  orange: 5
};

Task: Find the largest value.
output - prices = {
orange:5}
 */

const prices = {
  apple: 3,
  banana: 1,
  orange: 5
};

function findLargestValue(obj){
  
  const valuesArray = Object.values(obj)
  let largest = valuesArray[0]
  for(const value of valuesArray){
    if(largest<value){
      largest = value
    }
    else{
      largest = largest
    }
  }
return largest
}


console.log(findLargestValue(prices));


// shorter modern way find largest
const prices2 = {
  apple: 3,
  banana: 1,
  orange: 6
};

function findLargest2(obj){
  return Math.max(...Object.values(obj))
}

console.log(findLargest2(prices2));