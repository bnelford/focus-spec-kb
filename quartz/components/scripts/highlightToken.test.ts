import test, { describe } from "node:test"
import assert from "node:assert"
import { highlightToken } from "./highlightToken"

describe("highlightToken", () => {
  test("escapes raw titles and still highlights the match", () => {
    const html = highlightToken(`Cost & <script>alert(1)</script>`, "script", true)
    assert.equal(
      html,
      `Cost &amp; &lt;<span class="highlight">script</span>&gt;alert(1)&lt;/<span class="highlight">script</span>&gt;`,
    )
    assert.equal(html.includes("<script>"), false)
  })

  test("escapes an ampersand match without breaking the entity", () => {
    assert.equal(
      highlightToken("Cost & Usage", "&", true),
      `Cost <span class="highlight">&amp;</span> Usage`,
    )
  })

  test("does not double-escape content that is already escaped", () => {
    assert.equal(
      highlightToken("Cost &amp; Usage", "Usage", false),
      `Cost &amp; <span class="highlight">Usage</span>`,
    )
  })

  test("treats search punctuation as literal text", () => {
    assert.equal(highlightToken("a+b", "+", true), `a<span class="highlight">+</span>b`)
  })
})
