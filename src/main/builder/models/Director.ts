import Car from "./Car.js"
import CarBuilder from "./CarBuilder.js"

class Director {
  public buildFerrari(): Car {
    return new CarBuilder().setSeats(2).setEngine("V-12").getResult()
  }

  public buildToyota(): Car {
    return new CarBuilder().setSeats(7).setEngine("V-6").getResult()
  }
}

export default Director
