/**
 * Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: true Input: 'hello'    → Output: false
Hint: Compare the string to its reverse.

 */

function isPalindrome(str){
 const reversedString = str.split('').reverse().join('')
 if(str === reversedString){
    return true
 }
 else{
    false
 }
}

console.log(isPalindrome('racecar'));