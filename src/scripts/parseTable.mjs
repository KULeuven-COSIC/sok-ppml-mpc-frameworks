import { readFileSync } from 'fs'
import { join } from 'path'

export function parseMarkdownTable(content) {
  const lines = content.split('\n')
  const tableLines = []
  let inTable = false
  for (const line of lines) {
    const t = line.trim()
    if (t.startsWith('|')) { inTable = true; tableLines.push(t) }
    else if (inTable && t === '') break
  }
  if (tableLines.length < 3) return { headers: [], rows: [] }
  const parseRow = (line) => line.split('|').slice(1, -1).map(c => c.trim())
  const headers = parseRow(tableLines[0])
  const rows = tableLines.slice(2).map(line => {
    const cells = parseRow(line)
    const obj = {}
    headers.forEach((h, i) => { obj[h] = cells[i] || '' })
    return obj
  })
  return { headers, rows }
}

// Tables/*.md cite frameworks inconsistently as "Name [N](url)" or "Name [[N]](url)"
// (single- vs double-bracket ref numbers, mixed across different files with no fixed
// convention). The bracketed content is always just the bibliography reference number
// -- never part of the actual name -- so it must be removed entirely, not inlined as
// display text. `\[+` / `\]+` (one-or-more) matches both bracket styles with one regex.
export function cleanName(cell) {
  return (cell || '')
    .replace(/\[+\d+\]+\([^)]+\)/g, '')
    .trim()
}

// Extract the reference number from a "[N](url)" or "[[N]](url)" citation, regardless
// of bracket style.
export function getRefNum(cell) {
  const m = (cell || '').match(/\[+(\d+)\]+\(/)
  return m ? m[1] : null
}

export function getPaperUrl(cell) {
  const m = (cell || '').match(/\(([^)]+Bibliography[^)]+)\)/)
  if (!m) return null
  const hashPart = m[1].split('#')[1]
  return hashPart ? `https://github.com/KULeuven-COSIC/sok-ppml-mpc-frameworks/blob/main/Bibliography/references.md#${hashPart}` : null
}

export function normalizeStatus(s) {
  const t = (s || '').trim()
  if (t === '✓' || t.startsWith('✓')) return '✓'
  if (t === '✗') return '✗'
  if (t.startsWith('◐') || t === '◐') return '◐'
  if (t === '—' || t === '-') return '—'
  return t || '—'
}

export function loadTable(relPath) {
  try {
    const content = readFileSync(join(process.cwd(), relPath), 'utf-8')
    return parseMarkdownTable(content)
  } catch {
    return { headers: [], rows: [] }
  }
}
