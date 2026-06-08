/**
 * Problem 14: Flatten a Nested Array  [Medium]
Description: Write a function flattenArray(arr) that flattens one level of a nested array.
Example:
Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
Hint: Use flat() or reduce() with concat().

 */

function flattenArray(arr) {
 const results = arr.flat(Infinity)
 return results
}

console.log(flattenArray([1, [2, 3], [4, 5]]));


//another way 
function flattenArray2(arr) {
return arr.reduce((acc, current)=> {
if(Array.isArray(current)){
 acc.push(...flattenArray2(current))
}
else{
    acc.push(current)
}
return acc
}, [])
}

console.log(flattenArray2([1, [2, 3], [4, 5]]));


//another way
function flattenArray3 (arr){
    return arr.reduce((acc, current)=>{
   if(Array.isArray(current)){
    return acc.concat(flattenArray3(current))
   }
   else{
    acc.concat(current)
   }
    }, [])
}



/**
 * concat() always returns a NEW array.
It never changes the old one.

Example:

Code
[1].concat(2) → [1, 2]
[1].concat([2, 3]) → [1, 2, 3]
So every time you use concat(), you must return it.
 */