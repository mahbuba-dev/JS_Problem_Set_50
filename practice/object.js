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