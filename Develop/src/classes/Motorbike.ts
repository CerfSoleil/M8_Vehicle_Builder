import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor (
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) { super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  wheelie(motorbike: Motorbike): void {
    if (motorbike.make != '') {
      console.log(motorbike.make);
    }
    if (motorbike.model != '') {
      console.log(motorbike.model);
    }
    console.log(`The ${motorbike.make} ${motorbike.model} is doing a wheelie!`);
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

    console.log(
      `Wheel 1: A ${this.wheels[0].getTireBrand} wheel with a diameter of ${this.wheels[0].getDiameter} inches.`
    );
    console.log(
      `Wheel 2: A ${this.wheels[1].getTireBrand} wheel with a diameter of ${this.wheels[1].getDiameter} inches.`
    )
  }
}

export default Motorbike;