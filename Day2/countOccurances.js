/**
 * Problem 10: Count Occurrences of a Character  [Easy]
Description: Write a function countChar(str, char) that returns how many times a character 
appears in a string.
Example:
Input: 'banana', 'a'  → Output: 3
Hint: Use split(char).length - 1 or a loop.

 
 
*/

function countChar(str, char) {
 let count = 0
 
 for(const word of str){
    if(word.includes(char)){
        count = count + 1
    }
 }
 return count
}


console.log(countChar('banana', 'a' ));


//another way 
function countChar2(str, char) {
 
 return str.split(char).length-1
}


console.log(countChar2('banana', 'a' ));


