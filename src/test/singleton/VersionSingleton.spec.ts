import { describe, expect, it } from "vitest"
import Version from "../../main/singelton/models/Version.js"

// create a version instance

describe("VersionSingleton should ", () => {
  it("create a version instance", () => {
    const instanceVersion = Version.getInstance()
    expect(instanceVersion).toBeInstanceOf(Version)
  })
})
