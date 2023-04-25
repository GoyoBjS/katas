import { fizzBuzz } from './fizz-buzz'

describe('fizz-buzz', () => {
  it('should return an empty list if the number is NaN', function () {
    const given: number = NaN
    const actual = fizzBuzz(given)

    expect(actual).toEqual([])
  })

  it('should return a list of 1 element if the given number is 1', () => {
    const given: number = 1
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1])
  })

  it('should return a list of consecutive numbers from 1 to the given number', () => {
    const given: number = 2
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2])
  })

  it('should return fizz when it finds a number 3 in the array', () => {
    const given: number = 3
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should return "buzz" when it finds a number 5 in the array', () => {
    const given: number = 5
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })
  it('should return "fizz" each time it finds a number divisible 3 in the array', () => {
    const given: number = 9
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz'])
  })

  it('should return "buzz" each time it finds a number divisible 5 in the array', () => {
    const given: number = 10
    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])
  })

  it('should return "fizzbuzz" each time it finds a number divisible 5 % 3 in the array', () => {
    const given: number = 15
    const actual = fizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
