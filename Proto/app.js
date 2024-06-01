const musician = {
  plays: true,
};
const person = {
  alive: true,
};
person.__proto__ = musician;
console.log(person.musician);
