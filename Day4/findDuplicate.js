/**
 * Problem 20: Find Duplicate Values in Array of Objects  [Medium]
Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
Example:
Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
Hint: Use a frequency map (object) to count occurrences.


 */

function findDuplicateNames(arr){
   const freq = {}
   duplicate = []
   
   //step 1 - count names
   for(const item of arr){
    //  console.log(item);
     freq[item.name] = (freq[item.name] || 0) + 1
   
   }
}

console.log(findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Ali'}]));