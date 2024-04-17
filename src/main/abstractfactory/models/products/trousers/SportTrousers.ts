import { ITrousers } from "../../../interfaces/ITrouser.js"

class SportTrousers implements ITrousers {
  hasPockets(): boolean {
    throw new Error("Method not implemented.")
  }
  getClosureType(): string {
    throw new Error("Method not implemented.")
  }
}

export default SportTrousers
