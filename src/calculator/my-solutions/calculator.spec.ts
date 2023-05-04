import { calculator } from './calculator'
describe('given a string of operations, it should return the result number of the operation ', () => {
  it('should return 0 if the string is an invalid operation', () => {
    const given = ''
    const actual = calculator(given)
    expect(actual).toBe(actual)
  })

  it('should return the number if there is no operation', () => {
    const given = '1'
    const actual = calculator(given)

    expect(actual).toBe(1)
  })

  it('should return the sum of 2 numbers if there is a plus(+) sign in the string', () => {
    const given = '1 + 1'
    const actual = calculator(given)

    expect(actual).toBe(2)
  })

  it('should return the sum of N numbers if there is some plus(+) signs in the string', () => {
    const given = '4 + 2 + 1 + 3'
    const actual = calculator(given)

    expect(actual).toBe(10)
  })

  it('should return the substraction of 2 numbers if there is a substraction(-) sign in the string', () => {
    const given = '4 - 3'
    const actual = calculator(given)

    expect(actual).toBe(1)
  })

  it('should return the substraction of N numbers if there is some substraction(-) signs in the string', () => {
    const given = '4 - 3 - 2 - 1'
    const actual = calculator(given)

    expect(actual).toBe(-2)
  })

  it('should return the sum & substraction of N numbers if there is some substraction(-) and sum(+) signs in the string', () => {
    const given = '4 + 3 - 2 - 1'
    const actual = calculator(given)

    expect(actual).toBe(4)
  })
})
