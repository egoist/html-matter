import yaml from 'js-yaml'
import htmlMatter from './browser'

export default function (input, options = {}) {
  return htmlMatter(input, {
    parse: yaml.safeLoad,
    ...options
  })
}
