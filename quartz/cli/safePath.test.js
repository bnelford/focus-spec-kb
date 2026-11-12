import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileInOutput, safeSitePath } from "./safePath.js"

describe("safeSitePath", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "quartz-safe-path-"))

  test("keeps normal site paths", () => {
    assert.equal(safeSitePath(root, "/"), "/")
    assert.equal(safeSitePath(root, "/concepts/focus-overview"), "/concepts/focus-overview")
    assert.equal(safeSitePath(root, "/concepts/focus-overview/"), "/concepts/focus-overview/")
  })

  test("rejects traversal, encoding, and null bytes", () => {
    assert.equal(safeSitePath(root, "/../../etc/passwd"), null)
    assert.equal(safeSitePath(root, "/foo/../../../etc/passwd"), null)
    assert.equal(safeSitePath(root, "/%2e%2e/%2e%2e/etc/passwd"), null)
    assert.equal(safeSitePath(root, "/%2e%2e%2f%2e%2e%2fetc/passwd"), null)
    assert.equal(safeSitePath(root, "/foo%00.html"), null)
    assert.equal(safeSitePath(root, "/%"), null)
    assert.equal(safeSitePath(root, "/\\evil.com"), "/evil.com")
    assert.equal(safeSitePath(root, "/%5cevil.com"), "/evil.com")
  })

  test("fileInOutput stays inside the output root", () => {
    const inside = fileInOutput(root, "/concepts/focus-overview/index.html")
    assert.ok(inside)
    assert.equal(path.relative(path.resolve(root), inside).startsWith(".."), false)
    assert.equal(fileInOutput(root, "/../../etc/passwd"), null)
  })
})
