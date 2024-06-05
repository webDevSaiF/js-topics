async function fetchData(url) {
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error; // Rethrow the error after logging it
  }
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
console.log(divide(5, 5));
