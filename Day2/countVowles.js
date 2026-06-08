/**
 * Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2 Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression.

 
 */


function countVowels(str) {
 const vowles = ['a', 'e', 'i', 'o', 'u']
 let count = 0
 const strLowercase = str.toLowerCase()
 for(let i = 0; i<vowles.length; i++){
  if(strLowercase.includes(vowles[i])){
    count = count + 1
  }
 }
 return count
}
const str = 'javascript'
console.log(countVowels(str));

//another way

function countVowless (str2){
 return str2.match(/['aeiou']/g).length
}

const str2 = 'javascript'
console.log(countVowless(str2));
