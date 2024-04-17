import { ITrousers } from "../../../interfaces/ITrouser.js"

class DressTrousers implements ITrousers {
  hasPockets(): boolean {
    return true
  }
  getClosureType(): string {
    return "cremayera"
  }
}

export default DressTrousers
