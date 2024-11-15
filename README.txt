Challenge: Data Type Exploration
Create a JavaScript function that takes in an array of mixed data types and returns an object that categorizes the elements of the array by their data type.

Instructions:
Define a function named categorizeDataTypes.
The function should accept one parameter: an array containing elements of various data types (e.g., numbers, strings, booleans, objects, null, undefined, etc.).
Iterate over the array and categorize each element by its data type.
Return an object where the keys are the data types and the values are arrays containing the elements of the corresponding data type.
Example:
const mixedArray = [42, 'hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];

const result = categorizeDataTypes(mixedArray);

console.log(result);
// Output:
// {
//   number: [42],
//   string: ['hello'],
//   boolean: [true],
//   object: [null, { name: 'Alice' }, [1, 2, 3]],
//   undefined: [undefined]
// }