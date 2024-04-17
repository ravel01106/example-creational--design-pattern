import { IShoe } from "../../../interfaces/IShoe.js"

class DressShoe implements IShoe {
  isElegantShoe(): boolean {
    throw new Error("Method not implemented.")
  }
  isRunningShoes(): boolean {
    throw new Error("Method not implemented.")
  }
}

export default DressShoe
