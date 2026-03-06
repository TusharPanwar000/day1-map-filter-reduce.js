let number = [1, 2, 3, 4, 5];
let double = [];
for(i=0; i < number.length; i++){
  double.push(number[i]*2);
}
console.log(double);



let number1 = [1, 2, 3, 4, 5];
let doubled = number1.map(function(num) {
  return num*2;
})
console.log(doubled);


let number2 = [1,2,3,4,5];
let doubled2 = number.map(num => num*2);
console.log(doubled);


let names = ["ram", "shyam", "mohan", "sohan"];
let updateName = names.map(name => name.toUpperCase());
console.log(updateName);