import path from "path"

/**
 * Normalize a request path and keep it inside `root`.
 * Returns a site path that always starts with "/", or null when the
 * request is malformed or resolves outside `root`.
 */
export function safeSitePath(root, requestPath) {
  const rootResolved = path.resolve(root)
  const pathname = String(requestPath ?? "/").split("?")[0]
  let decoded
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    return null
  }
  if (decoded.includes("\0")) return null
  // Treat backslashes as separators so `/\evil.com` cannot become a protocol-relative redirect.
  decoded = decoded.replaceAll("\\", "/")

  const trailingSlash = decoded.length > 1 && decoded.endsWith("/")
  const relative = decoded.replace(/^\/+/, "")
  const resolved = path.resolve(rootResolved, relative)
  const fromRoot = path.relative(rootResolved, resolved)
  if (fromRoot.startsWith("..") || path.isAbsolute(fromRoot)) return null

  const posix = fromRoot.split(path.sep).join("/")
  if (posix === "") return "/"
  return `/${posix}${trailingSlash ? "/" : ""}`
}

/** Absolute file path for a site path, or null if it would leave `root`. */
export function fileInOutput(root, sitePath) {
  const safe = safeSitePath(root, sitePath)
  if (safe === null) return null
  return path.resolve(root, safe.replace(/^\/+/, ""))
}
