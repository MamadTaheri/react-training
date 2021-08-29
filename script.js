// Inheritence

class Vehicle {
    constructor(color,model){
        this.color = color,
        this.model = model
    }

    go() {
        console.log("I go")
    }
}

class Car extends Vehicle {
    constructor(color,model,speed){
        super(color,model);
        this.speed = speed
    }

    speed() {
        console.log("I go fast!")
    }
}

const vahicle = new Vehicle("red","Ferrari");
console.log(vahicle)

const car = new Car("red", "Ferrari", 190);
console.log(car)