// 1. THE PARENT CLASS (The Root)
class Vehicle {
    // SHORTHAND: 'public brand' in the constructor automatically 
    // creates the property and assigns the value for us.
    constructor(public brand: string) {
    }

    displayBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }
}

// 2. CHILD CLASS A: Car
// 'Car' inherits everything from 'Vehicle'
class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        // 'super' is the bridge. It triggers the Vehicle constructor 
        // to make sure the 'brand' is set up properly in memory.
        super(brand); 
    }

    displayCarInfo(): void {
        // Can access 'this.brand' because it was inherited from Vehicle
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}

// 3. CHILD CLASS B: Bike
// 'Bike' also inherits from 'Vehicle', but it has its own unique 'type'
class Bike extends Vehicle {
    constructor(brand: string, public type: string) {
        super(brand);
    }

    displayBikeInfo(): void {
        console.log(`Bike Brand: ${this.brand}, Type: ${this.type}`);
    }
}

class Truck extends Vehicle {
constructor(brand: string, public capacity: number) {
        super(brand);
    }

    displayTruckInfo(): void {
        console.log(`Truck Brand: ${this.brand}, Capacity: ${this.capacity} tons`);
    }
}

// --- EXECUTION ---

const myCar = new Car("Toyota", "Corolla");
myCar.displayBrand();   // Inherited method
myCar.displayCarInfo(); // Unique method

const myBike = new Bike("Yamaha", "Sport");
myBike.displayBrand();   // Inherited method
myBike.displayBikeInfo(); // Unique method

const myTruck = new Truck("Volvo", 10);
myTruck.displayBrand();   // Inherited method
myTruck.displayTruckInfo(); // Unique method