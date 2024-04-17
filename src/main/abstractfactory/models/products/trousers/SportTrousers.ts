import { ITrousers } from "../../../interfaces/ITrouser.js"

class SportTrousers implements ITrousers {
  hasPockets(): boolean {
    return false
  }
  getClosureType(): string {
    return "no tiene cierre"
  }
}

export default SportTrousers
