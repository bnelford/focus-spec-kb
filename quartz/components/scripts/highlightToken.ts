import { escapeHTML } from "../../util/escape"

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/** Wrap the first matching term in a highlight span. Escape text when it is not already escaped. */
export function highlightToken(tok: string, searchTok: string, escapeText: boolean): string {
  if (!searchTok || !tok.toLowerCase().includes(searchTok.toLowerCase())) {
    return escapeText ? escapeHTML(tok) : tok
  }

  const regex = new RegExp(`(${escapeRegExp(searchTok.toLowerCase())})`, "gi")
  if (!escapeText) {
    return tok.replace(regex, `<span class="highlight">$1</span>`)
  }

  return tok
    .split(regex)
    .map((part, i) =>
      i % 2 === 1 ? `<span class="highlight">${escapeHTML(part)}</span>` : escapeHTML(part),
    )
    .join("")
}
