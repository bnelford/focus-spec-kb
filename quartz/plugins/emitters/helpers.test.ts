import test, { describe } from "node:test"
import assert from "node:assert"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { write } from "./helpers"
import { FullSlug } from "../../util/path"
import { BuildCtx } from "../../util/ctx"

function ctxFor(output: string): BuildCtx {
  return { argv: { output } } as BuildCtx
}

describe("write", () => {
  test("writes inside the output directory and refuses paths that escape it", async () => {
    const output = fs.mkdtempSync(path.join(os.tmpdir(), "quartz-write-"))
    try {
      const written = await write({
        ctx: ctxFor(output),
        slug: "guides/intro" as FullSlug,
        ext: ".html",
        content: "ok",
      })
      assert.equal(fs.readFileSync(written, "utf8"), "ok")
      assert.equal(path.relative(path.resolve(output), written).startsWith(".."), false)

      const collapsed = await write({
        ctx: ctxFor(output),
        slug: "foo/../bar" as FullSlug,
        ext: ".html",
        content: "inside",
      })
      assert.equal(fs.readFileSync(collapsed, "utf8"), "inside")
      assert.equal(path.resolve(collapsed), path.resolve(output, "bar.html"))

      await assert.rejects(() =>
        write({
          ctx: ctxFor(output),
          slug: "../../etc/passwd" as FullSlug,
          ext: ".html",
          content: "nope",
        }),
      )
      await assert.rejects(() =>
        write({
          ctx: ctxFor(output),
          slug: "notes/../../../tmp/pwn" as FullSlug,
          ext: ".html",
          content: "nope",
        }),
      )

      assert.equal(fs.existsSync(path.resolve(output, "../../etc/passwd.html")), false)
      assert.equal(fs.existsSync(path.resolve(output, "../../../tmp/pwn.html")), false)
    } finally {
      fs.rmSync(output, { recursive: true, force: true })
    }
  })
})
