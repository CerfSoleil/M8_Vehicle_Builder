// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Creation of the truck class, extending vehicle
class Truck extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number; //will be in lbs.
  topSpeed: number; //will be in MPH
  wheels: Wheel[];
  towingCapacity: number; //will be in lbs.



  // Constructor for truck including initialization, calling of the vehicle class, and creation of the wheels.
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[],
  ) { super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
  
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {this.wheels = wheels;

    }
  }

  // this should be workable without the AbleToTow.js
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.make != '') {
      console.log(vehicle.make);
    }
    if (vehicle.model != '') {
      console.log(vehicle.model);
    }

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicle.make} ${vehicle.model} is now being towed.`);
    } else {
      console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed.`)
    }
  }

  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs.`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs.`)

    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: A ${wheel.getTireBrand} wheel with a diameter of ${wheel.getDiameter} inches.`
      );
    });    
  }
}

// Export the Truck class as the default export
export default Truck;
