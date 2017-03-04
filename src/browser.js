export default function (input, {
  namespace = 'frontmatter',
  parse = val => val
} = {}) {
  const re = new RegExp(`<!--\\s*@${namespace}([\\s\\n]+)([\\s\\S]*?)-->`)
  const [, prefix, body] = input.match(re) || []

  if (!body) return null

  return parse(prefix + body)
}
