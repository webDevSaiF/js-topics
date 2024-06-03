// Create a Multidimensional Array
let arr05 = new Array(3);
for (let i = 0; i < arr05.length; i++) {
  arr05[i] = new Array(3);
  for (let j = 0; j < arr05[i].length; j++) {
    arr05[i][j] = i * arr05.length + j;
  }
}
console.log("Array 05", arr05);

// Create and Populate an Array
let arr04 = new Array(50);
for (let i = 0; i < arr04.length; i++) {
  arr04[i] = i + 1;
}
console.log("Array 04", arr04);

// Create an Array with Specific Elements
let arr03 = new Array(1, 2, 3, 4, 5);
console.log("Array 03", arr03);

// Create an Array with a Specified Length
let arr02 = new Array(5);
console.log("Array 02", arr02);

// Create an empty array
let arr01 = new Array();
console.log("Array 01", arr01);
