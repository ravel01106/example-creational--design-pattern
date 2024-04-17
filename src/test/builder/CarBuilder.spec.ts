import { describe, expect, it } from "vitest"
import Director from "../../main/builder/models/Director.js"
import CarBuilder from "../../main/builder/models/CarBuilder.js"

// create a car with certain characteristics
// create a ferrari for the director
// create a toyota for the director

describe("CarBuilder should ", () => {
  it("create a car with certain characteristics", () => {
    const car = new CarBuilder().setSeats(3).setEngine("V-10").getResult()
    expect(car.toString()).toBe(`Seats: 3 | Engine: V-10`)
  })
  it("create a ferrari for the director", () => {
    const director = new Director()
    const ferrariCar = director.buildFerrari()
    expect(ferrariCar.toString()).toBe(`Seats: 2 | Engine: V-12`)
  })
  it("create a toyota for the director", () => {
    const director = new Director()
    const ferrariCar = director.buildToyota()
    expect(ferrariCar.toString()).toBe(`Seats: 7 | Engine: V-6`)
  })
})
