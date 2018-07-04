require = require('esm')(module)
const { getScopeCounter } = require('../cjs')
// or:
// const { getScopeCounter } = require('../es')

test('test', () => {
  expect(getScopeCounter()).toBe(1)
})
