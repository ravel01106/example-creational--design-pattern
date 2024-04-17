import { IShirt } from "../../../interfaces/IShirt.js"

class DressShirt implements IShirt {
  hasLongSleeves(): boolean {
    throw new Error("Method not implemented.")
  }
  hasButtons(): boolean {
    throw new Error("Method not implemented.")
  }
}

export default DressShirt
