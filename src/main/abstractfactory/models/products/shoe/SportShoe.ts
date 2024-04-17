import { IShoe } from "../../../interfaces/IShoe.js"

class SportShoe implements IShoe {
  isElegantShoe(): boolean {
    return false
  }
  isRunningShoes(): boolean {
    return true
  }
}

export default SportShoe
