import { IShoe } from "../../../interfaces/IShoe.js"

class SportShoe implements IShoe {
  isElegantShoe(): boolean {
    throw new Error("Method not implemented.")
  }
  isRunningShoes(): boolean {
    throw new Error("Method not implemented.")
  }
}

export default SportShoe
