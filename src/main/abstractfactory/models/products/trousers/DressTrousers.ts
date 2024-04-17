import { ITrousers } from "../../../interfaces/ITrouser.js"

class DressTrousers implements ITrousers {
  hasPockets(): boolean {
    throw new Error("Method not implemented.")
  }
  getClosureType(): string {
    throw new Error("Method not implemented.")
  }
}

export default DressTrousers
