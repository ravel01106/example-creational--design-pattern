import User from "../models/User.js"

export interface IPrototypeUser {
  clone(): User
}
