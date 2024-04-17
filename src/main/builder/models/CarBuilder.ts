import { Builder } from "../interface/Builder.js"
import Car from "./Car.js"

class CarBuilder implements Builder {
  private car: Car

  constructor() {
    this.car = new Car()
  }

  public setSeats(seats: number): this {
    this.car.setSeats(seats)
    return this
  }

  public setEngine(engine: string): this {
    this.car.setEngine(engine)
    return this
  }

  public getResult(): Car {
    return this.car
  }
}

export default CarBuilder
