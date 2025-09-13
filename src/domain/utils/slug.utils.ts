export const makeSlug = (input: string | null | undefined): string => {
  const separator = '-'

  if (input == null) {
    return ''
  }

  // Make string without whitespaces:
  let s = String(input).trim()
  if (s === '') {
    return ''
  }

  // Remove diacritics chars:
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Remove the apostrophes:
  s = s.replace(/['’`ʼ˝]/g, '')

  // Make separators:
  try {
    s = s.replace(new RegExp(`[^\\p{L}\\p{N}]+`, 'gu'), separator)
  } catch {
    // Fallback: ASCII-safe regex:
    s = s.replace(/[^A-Za-z0-9]+/g, separator)
  }

  // Lower the case:
  s = s.toLowerCase()

  // Remove duplicated separators and from the start/end for the string:
  const escSep = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  s = s.replace(new RegExp(`${escSep}+`, 'g'), separator)
    .replace(new RegExp(`^${escSep}|${escSep}$`, 'g'), '')

  return s
}
