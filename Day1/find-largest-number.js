/**
 * Problem 3: Find the Largest of Three Numbers  [Easy]
Description: Write a function largest(a, b, c) that returns the largest of three numbers.
Example:
Input: 3, 7, 5  → Output: 7
Hint: Use Math.max() or if-else conditions.

 
 */
   //use math.max
function findLargest (num1, num2, num3) {
  return Math.max(num1,num2,num3)
}



console.log(findLargest(3,7,5));



// use if / else
    function findLargest(num1,num2,num3){
        if(num1>num2 && num1>num3){
            return num1
        }
        else if(num2>num1 && num2>num3){
            return num2
        }
        else{
            return num3
        }
    }

    console.log(findLargest(3,5,8));