process.env.test = 'some-value'

const foo = require('../cjs')

test('test', () => expect(foo()).toBe('some-value'))
