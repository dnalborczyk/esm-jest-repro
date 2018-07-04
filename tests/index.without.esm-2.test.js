const { getScopeCounter } = require('../cjs')

test('test', () => {
  expect(getScopeCounter()).toBe(1)
})
