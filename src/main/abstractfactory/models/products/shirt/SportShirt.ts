import { IShirt } from "../../../interfaces/IShirt.js"

class SportShirt implements IShirt {
  hasLongSleeves(): boolean {
    return false
  }
  hasButtons(): boolean {
    return false
  }
}

export default SportShirt
