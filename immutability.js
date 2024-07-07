// Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = { ...object };

// Modify object
object.newKey = "New Value";

console.log(object); // Output: { key: "Value of Key", newKey: "New Value" }
console.log(copyOfObject); // Output: { key: "Value of Key" }

// Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = [...arrayOfNumbers];

// Modify arrayOfNumbers
arrayOfNumbers.push(6);

console.log(arrayOfNumbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(copyArrayOfNumbers); // Output: [1, 2, 3, 4, 5]
