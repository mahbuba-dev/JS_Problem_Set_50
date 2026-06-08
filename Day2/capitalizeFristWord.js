/**
 * Problem 9: Capitalize First Letter of Each Word  [Easy]
Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
Example:
Input: 'hello world'  → Output: 'Hello World'
Hint: Use split(' '), map(), and join(' ').

*/


function titleCase(str) {
   const arrStr =  str.split(' ')
   console.log(arrStr);
   const maped = arrStr.map((word) => word[0].toUpperCase() + word.slice(1))
   console.log(maped);
  return maped.join(" ")
}

console.log(titleCase('hello world'));