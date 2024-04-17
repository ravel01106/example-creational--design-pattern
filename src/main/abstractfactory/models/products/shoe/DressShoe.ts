import { IShoe } from "../../../interfaces/IShoe.js"

class DressShoe implements IShoe {
  isElegantShoe(): boolean {
    return true
  }
  isRunningShoes(): boolean {
    return false
  }
}

export default DressShoe
