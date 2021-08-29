// primitive type: string - number - boolean - null - undifined - symbol

//refrence type: object - array

// let number = 5;
// let number2 = number;
// number2 = 325;

// console.log(number)
// console.log(number2)

let array1 = [1,2,3];
let array2 = array1;
array2.push(4);

console.log(array1)
console.log(array2)

let object1 = {name: "milad"};
let object2 = {name: "milad"};

console.log(object1 === object2)