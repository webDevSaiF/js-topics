// Iterating over Sets
const letters = new Set(["a", "b", "c"]);
letters.forEach((letter) => console.log(letter));

//Performing Set Operations
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
console.log({ set1: set1, set2: set2 });

const union = set1.union(set2);
console.log("union", union);

const intersection = set1.intersection(set2);
console.log("intersection", intersection);

const difference = set1.difference(set2);
console.log("difference ", difference);

//Size of the Set
const countries = new Set(["France", "Germany", "Italy"]);
console.log("countries count", countries.size);

//Adding and Removing Elements
const colors = new Set();
console.log("colors", colors);
colors.add("red");
console.log("colors", colors);
colors.add("blue");
console.log("colors", colors);
colors.delete("blue");
console.log("colors", colors);

//Checking Membership
const fruits = new Set(["apple", "banana", "orange"]);
console.log("fruits", fruits);
const hasApple = fruits.has("apple");
console.log("hasApple", hasApple);

//Storing Unique Values
const numbers = [1, 2, 3, 1, 2];
const uniqueNumbers = new Set(numbers);
console.log("numbers", numbers);
console.log("uniqueNumbers", uniqueNumbers);
