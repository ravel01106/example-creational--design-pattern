class Version {
  private major: number
  private minor: number
  private revision: number

  private static instance: Version = new Version()
  private constructor() {
    this.major = 1
    this.minor = 0
    this.revision = 0
  }

  static getInstance(): Version {
    if (this.instance == null) {
      return (this.instance = new Version())
    }
    return this.instance
  }

  toString(): string {
    return `{ major = ${this.major}, minor = ${this.minor}, revision = ${this.revision} }`
  }
}

export default Version
