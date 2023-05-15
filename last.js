function getLastElements(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
      return undefined;
    }
  
    if (n === undefined || n >= array.length) {
      return array[array.length - 1];
    }
  
    return array.slice(-n);
  }
  

  const myArray = [1, 2, 3, 4, 5];

console.log(getLastElements(myArray));          // Output: 5
console.log(getLastElements(myArray, 1));       // Output: [5]
console.log(getLastElements(myArray, 3));       // Output: [3, 4, 5]
console.log(getLastElements(myArray, 10));      // Output: [1, 2, 3, 4, 5]
console.log(getLastElements([], 2));            // Output: undefined
console.log(getLastElements("not an array"));   // Output: undefined

