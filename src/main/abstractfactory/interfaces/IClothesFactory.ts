import { IShirt } from "./IShirt.js"
import { IShoe } from "./IShoe.js"
import { ITrousers } from "./ITrouser.js"

export interface IClothesFactory {
  createShoe(): IShoe
  createShirt(): IShirt
  createTrousers(): ITrousers
}
