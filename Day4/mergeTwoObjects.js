/**
 * Problem 17: Merge Two Objects  [Easy]
Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
Example:
Input: {a:1}, {b:2}  → Output: {a:1, b:2}
Hint: Use the spread operator or Object.assign().


 */

  function mergeObjects(obj1, obj2){
   return {...obj1, ...obj2}
  }


  console.log(mergeObjects({a:1}, {b:2}));


 /**
  * Object.assign() JavaScript-এ একটি object-এর properties অন্য object-এ copy করার জন্য ব্যবহার করা হয়।
Object.assign(target, source1, source2, ...)
target → যেই object-এ data copy হবে
source → যেখান থেকে data copy হবে
  *  */ 


function mergeObjects2(obj1, obj2){
    let newObj = {}
   return Object.assign(newObj, obj1, obj2)
  }


  console.log(mergeObjects2({a:1}, {b:2}));
