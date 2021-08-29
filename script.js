// Classess

class Vehicle {
    constructor(color,model){
        this.color = color,
        this.model = model
    }

    speed() {
        console.log("I go fast")
    }
}

const car1 = new Vehicle("red","Ferrari");
console.log(car1)

const car2 = new Vehicle("white","BMX");
console.log(car2)