/**
 * Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join('').

 

 */

//using reverse
function reverseString (str) {
 return str.split('').reverse().join('')
}

const str = 'Hello'
console.log(reverseString(str));


//another way without builtin

function reverseString2 (str2) {
 let reversed = []
 const strArrary = str2.split('')
 for(let i = strArrary.length-1; i>=0; i--){
   reversed.push(strArrary[i])
 }
 return reversed.join("")

}

const str2 = 'Hello'
console.log(reverseString2(str2));