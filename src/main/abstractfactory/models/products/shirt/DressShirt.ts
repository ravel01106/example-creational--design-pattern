import { IShirt } from "../../../interfaces/IShirt.js"

class DressShirt implements IShirt {
  hasLongSleeves(): boolean {
    return true
  }
  hasButtons(): boolean {
    return true
  }
}

export default DressShirt
