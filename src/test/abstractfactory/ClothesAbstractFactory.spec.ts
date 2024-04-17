import { describe, expect, it } from "vitest"
import SportClothesFactory from "../../main/abstractfactory/factories/SportClothesFactory.js"
import DressClothesFactory from "../../main/abstractfactory/factories/DressClothesFactory.js"

// create a sport shirt
// create a dress shirt
// create a sport shoes
// create a dress shoes
// create a sport trousers
// create a dress trousers

const sportClothesFactory: SportClothesFactory = new SportClothesFactory()
const dressClothesFactory: DressClothesFactory = new DressClothesFactory()
describe("ClothesFactory should ", () => {
  it("create a sport shirt", () => {
    const sportShirt = sportClothesFactory.createShirt()
    expect(sportShirt.hasButtons()).toBe(false)
    expect(sportShirt.hasLongSleeves()).toBe(false)
  }),
    it("create a dress shirt", () => {
      const dressShirt = dressClothesFactory.createShirt()
      expect(dressShirt.hasButtons()).toBe(true)
      expect(dressShirt.hasLongSleeves()).toBe(true)
    }),
    it("create a sport shoe", () => {
      const sportShoe = sportClothesFactory.createShoe()
      expect(sportShoe.isElegantShoe()).toBe(false)
      expect(sportShoe.isRunningShoes()).toBe(true)
    }),
    it("create a dress shoe", () => {
      const dressShoe = dressClothesFactory.createShoe()
      expect(dressShoe.isElegantShoe()).toBe(true)
      expect(dressShoe.isRunningShoes()).toBe(false)
    }),
    it("create a sport trousers", () => {
      const sportTrousers = sportClothesFactory.createTrousers()
      expect(sportTrousers.hasPockets()).toBe(false)
      expect(sportTrousers.getClosureType()).toBe("no tiene cierre")
    }),
    it("create a dress trousers", () => {
      const dressTrouser = dressClothesFactory.createTrousers()
      expect(dressTrouser.hasPockets()).toBe(true)
      expect(dressTrouser.getClosureType()).toBe("cremayera")
    })
})
