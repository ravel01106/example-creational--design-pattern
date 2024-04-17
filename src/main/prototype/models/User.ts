import { IPrototypeUser } from "../interfaces/IPrototype.js"

class User implements IPrototypeUser {
  name: string
  age: number
  height: number
  weight: number

  constructor(name: string, age: number, height: number, weight: number) {
    this.name = name
    this.age = age
    this.height = height
    this.weight = weight
  }

  toString(): string {
    return `{ name = ${this.name}, age = ${this.age}, height = ${this.height}, weight = ${this.weight} }`
  }

  clone(): User {
    const user = new User(this.name, this.age, this.height, this.weight)
    return user
  }
}

export default User
