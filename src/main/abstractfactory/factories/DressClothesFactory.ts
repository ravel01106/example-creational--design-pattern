import { IClothesFactory } from "../interfaces/IClothesFactory.js"
import { IShirt } from "../interfaces/IShirt.js"
import { IShoe } from "../interfaces/IShoe.js"
import { ITrousers } from "../interfaces/ITrouser.js"
import DressShirt from "../models/products/shirt/DressShirt.js"
import DressShoe from "../models/products/shoe/DressShoe.js"
import DressTrousers from "../models/products/trousers/DressTrousers.js"

class DressClothesFactory implements IClothesFactory {
  createShoe(): IShoe {
    return new DressShoe()
  }
  createShirt(): IShirt {
    return new DressShirt()
  }
  createTrousers(): ITrousers {
    return new DressTrousers()
  }
}

export default DressClothesFactory
