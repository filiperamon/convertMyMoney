const convert = require('./convert')

test('converts cotacao 4 and quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('converts cotacao 0 and quantidade 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('to maney convert to float', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})

test('convert toMoney convert string', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})