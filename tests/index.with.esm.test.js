require = require('esm')(module)

process.env.test = 'some-value'

const foo = require('../cjs')
// or:
// const { default: foo } = require('../es')

test('test', () => expect(foo()).toBe('some-value'))
