// let number = [1,2,3,4,5,6,7,8,9,10];
// let evenNumber = number.filter(num => num % 2 === 0);
// console.log(evenNumber);

// let number = [1,2,3,4,5,6,7,8,9,10];
// let increaseNum = number.filter(num => num > 5);
// console.log(increaseNum);

// let name = ["Ram", "Shyam", "Mohan", "Ro", "Si"];
// let printName = name.filter(name => name.length > 3);
// console.log(printName);



// let numbers = [1,2,3,4,5];
// let total = 0;
// for (let i = 0; i < numbers.length; i++){
//   total = total + numbers[i];
// }
// console.log(total)



// let numbers = [1,2,3,4,5];
// let total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total);



// let prize = [100, 200, 300, 400, 500];
// let total = prize.reduce((acc, num) => acc + num, 0)
// console.log(total)


let products = [
  {name: "Phone", price: 10000},
  {name: "Laptop", price: 50000},
  {name: "Earphone", price: 2000},
  {name: "Tablet", price: 25000},
  {name: "Charger", price: 500}
];

let total = products
  .filter(products => products.price > 5000)
  .map(products => products.price)
  .reduce((acc, num) => acc + num, 0);

console.log(total);