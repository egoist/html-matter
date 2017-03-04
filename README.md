# html-matter

[![NPM version](https://img.shields.io/npm/v/html-matter.svg?style=flat)](https://npmjs.com/package/html-matter) [![NPM downloads](https://img.shields.io/npm/dm/html-matter.svg?style=flat)](https://npmjs.com/package/html-matter) [![Build Status](https://img.shields.io/circleci/project/egoist/html-matter/master.svg?style=flat)](https://circleci.com/gh/egoist/html-matter) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add html-matter
```

## Usage

By default you can use `@frontmatter` at the beginning of the comment to indicate that its content is front-matter:

```js
const htmlMatter = require('html-matter')

htmlMatter(`
<!-- @frontmatter title: Hello World -->
`)
//=> yields:
{ title: 'Hello World' }

// multi-line
htmlMatter(`
<!-- @frontmatter
title: Hello
tags:
  - js
  - es6
-->
`)
//=> yields:
{
  title: 'hello',
  tags: ['js', 'es6']
}
```

Use a custom namespace instead of `frontmatter`:

```js
htmlMatter(`
<!-- @config
port: 3000
-->
`, {namespace: 'config'})
//=> yields:
{ port: 3000 }
```

Use a custom parser instead of [Yaml](https://github.com/nodeca/js-yaml):

```js
htmlMatter(`
@config {
  "port": 3000
}
`, { namespace: 'config', parse: JSON.parse })
//=> yields:
{ port: 3000 }
```

If no front-matter was found, it returns `null`.

## API

### htmlMatter(input, [options])

#### input

Type: `string`<br>
Required: `true`

HTML string.

#### options

##### namespace

Type: `string`<br>
Default: `'frontmatter'`

##### parse

Type: `function`<br>

The default value is differnt in node.js and browser environment:

- in node.js, it defaults to `require('js-yaml').safeLoad`, which means it's treated as YAML
- in browser (CDN/bundler), it defaults to `val => val`, which means it simply returns the raw content, how to parse it is depending on you.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**html-matter** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/html-matter/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
