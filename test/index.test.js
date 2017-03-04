import htmlMatter from '../src/node'

test('main', () => {
  const output = htmlMatter(`
  wow <br>
  <!-- @frontmatter
  title: hi
  array:
    - foo
    - bar
  -->

  `)
  expect(output).toEqual({
    title: 'hi',
    array: ['foo', 'bar']
  })
})

test('single-line', () => {
  const output = htmlMatter(`
  <!-- @frontmatter title: haha -->
  `)

  expect(output.title).toBe('haha')
})

test('custom namespace', () => {
  const output = htmlMatter(`
  wow <br>
  <!-- @foo-bar
  title: hi
  array:
    - foo
    - bar
  -->

  <!-- foo: bar -->

  <!-- @other
  foo: bar
  -->
  `, { namespace: 'foo-bar' })
  expect(output).toEqual({
    title: 'hi',
    array: ['foo', 'bar']
  })
})

test('custom parser', () => {
  const output = htmlMatter(`
    <!-- @config
    {"port": 3000}
    -->
  `, { namespace: 'config', parse: JSON.parse })

  expect(output).toEqual({ port: 3000 })
})
