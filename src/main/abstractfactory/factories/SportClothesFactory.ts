import { IClothesFactory } from "../interfaces/IClothesFactory.js"
import { IShirt } from "../interfaces/IShirt.js"
import { IShoe } from "../interfaces/IShoe.js"
import { ITrousers } from "../interfaces/ITrouser.js"
import SportShirt from "../models/products/shirt/SportShirt.js"
import SportShoe from "../models/products/shoe/SportShoe.js"
import SportTrousers from "../models/products/trousers/SportTrousers.js"

class SportClothesFactory implements IClothesFactory {
  createShoe(): IShoe {
    return new SportShoe()
  }
  createShirt(): IShirt {
    return new SportShirt()
  }
  createTrousers(): ITrousers {
    return new SportTrousers()
  }
}

export default SportClothesFactory
