/**
 * Problem 13: Remove Duplicates from Array  [Easy]
Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
Example:
Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
Hint: Use Set or filter() with indexOf().

 */

function removeDuplicates(arr) {
 let uniqueArr = []
 for(const num of arr){
    if(!uniqueArr.includes(num)){
        uniqueArr.push(num)
    }
 }
 return uniqueArr
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));


// using set()

function removeDuplicates2(arr) {
const removeDuplicate =  new Set(arr)
const uniqueArr = [...removeDuplicate]
return uniqueArr
}

console.log(removeDuplicates2([1, 2, 2, 3, 3, 4]));


// using filter

function removeDuplicates3(arr) {                 
 const uniqueArr = arr.filter((num, index) => arr.indexOf(num) === index)
 return uniqueArr
}

console.log(removeDuplicates3([1, 2, 2, 3, 3, 4]));


//using reduce
function removeDuplicates4(arr) {                 
 return arr.reduce((acc, current) => {
  if(!acc.includes(current)){
 acc.push(current)
  }
  return acc
 },[])
 
}

console.log(removeDuplicates4([1, 2, 2, 3, 3, 4]));



