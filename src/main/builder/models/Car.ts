class Car {
  private seats: number = 0
  private engine: string = ""

  public setSeats(seats: number): void {
    this.seats = seats
  }

  public setEngine(engine: string): void {
    this.engine = engine
  }

  public toString(): string {
    return `Seats: ${this.seats} | Engine: ${this.engine}`
  }
}

export default Car
