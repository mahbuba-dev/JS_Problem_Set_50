// Problem 1: Key-Value Swap
//input
const user = {
  name: "Mahbuba",
  city: "New York",
  role: "Developer"
};

//output
// {
//   Mahbuba: "name",
//   "New York": "city",
//   Developer: "role"
// }



function swapedObject (obj) {
 const swaped = {}
 for(const key in obj){
   
    const value = obj[key]
     console.log(value);
     swaped[value] = key
 }
 return swaped
}

console.log(swapedObject(user));

function swapedObject2(obj){
    const swaped = {}
    for(const [key, value] of Object.entries(obj)){
        console.log([key, value]);
        swaped[value] = key
    }
    return swaped
}

console.log(swapedObject2(user));