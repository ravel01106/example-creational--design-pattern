import { describe, expect, it } from "vitest"
import User from "../../main/prototype/models/User.js"

// clone a user

describe("UserPrototyope should ", () => {
  it("clone a user", () => {
    const userOne = new User("Pepito", 22, 1.72, 60)
    const userTwo = userOne.clone()
    userTwo.name = "Juanito"
    expect(userTwo.toString()).toBe(`{ name = Juanito, age = 22, height = 1.72, weight = 60 }`)
  })
})
