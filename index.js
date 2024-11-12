// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

// Initialize a new hash map
let hashMap = new Map();

// Add a key-value pair to the hash map
hashMap.set('key1', 'value1');
hashMap.set('key2', 'value2');
hashMap.set('mj', 'sigma school instructor');


// Get value associated with the key
let result = hashMap.get('key1'); // returns 'value1'
let result2 = hashMap.get('key2'); // returns 'value2


// Check if a key exists

// Solution 1

if (hashMap.has('key1')) {
  console.log(true);
}

// Solution 2
if (hashMap.has('key2')) {
  console.log("Key2 exists");
}

console.log(result);
console.log(result2);