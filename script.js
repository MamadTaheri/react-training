// Destructuring

const userData = {
    name: "Mamad",
    age: "24",
    address: {
        city: "Ahvaz",
        street: "Kianpars"
    }
};

// const name = userData['name']
// const name = userData.name
// const age = userData.age
// const address = userData.address

// console.log(name)
// console.log(age)
// console.log(address)

// const {name, age, address} = userData;
// const {city, street} = address

const {name, age, address: {city, street}} = userData;


console.log(name)
console.log(age)
console.log(city)
console.log(street)