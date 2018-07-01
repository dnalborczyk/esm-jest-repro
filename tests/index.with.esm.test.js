require = require('esm')(module)

const hasGlobal = require('../cjs')
// or:
// const { default: hasGlobal } = require('../es')

test('test', () => expect(hasGlobal).toBe(true))
