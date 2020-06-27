import f from './index'

test('one: switches object keys and return values', () => {

  const translate = {
    1: 'um',
    2: 'dois',
    '3': 'três',
  }

  const one = f.one(1, translate)
  const two = f.one(2, translate)
  const three = f.one(3, translate)
  const four = f.one(4, translate)
  const five = f.one(5, {})

  expect(one).toBe('um')
  expect(two).toBe('dois')
  expect(three).toBe('três')
  expect(four).toBe(undefined)
  expect(five).toBe(undefined)

})
