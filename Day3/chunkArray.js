/**
 * Chunk an Array  [Medium]
Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.

 */


const arr = [1,2,3,4,5,6,7];
const size = 3;

function chunkArray(arr, size){
  let results = [];

  for(let i = 0; i < arr.length; i += size){
    const chunk = arr.slice(i, i + size);
    results.push(chunk);
  }

  return results;
}

console.log(chunkArray(arr, size));



/**
 * notes: slice() original array change করে না
 * 👉 শুধু copy করে
👉 original array একটুও modify হয় না

slice(start, end)
start index থেকে শুরু

end index এর আগ পর্যন্ত নেয়

end element নেয় না


end না দিলে — শেষ পর্যন্ত নেয়

Negative index allowed
Negative মানে array‑এর শেষ দিক থেকে count করা।

slice() সবসময় নতুন array return করে
 */