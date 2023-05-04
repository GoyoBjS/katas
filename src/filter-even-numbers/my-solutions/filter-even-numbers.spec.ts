import { filterEvenNumbers } from './filter-even-numbers'

describe('filter even numbers', () => {
  it('should return empty list if empty list is given', () => {
    const given: number[] = []
    const actual: number[] = filterEvenNumbers(given)
    expect(actual).toEqual([])
  })

  it('should return a list with 1 number if the given list is an array of the number 0', () => {
    const given: number[] = [0]
    const actual: number[] = filterEvenNumbers(given)
    expect(actual).toEqual([0])
  })
  it('should return an empty list if there is no even number in it', () => {
    const given = [1, 3, 5, 7, 9]
    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([])
  })
  it('should return a list of even numbers given a list of numbers', () => {
    const given = [1, 2, 3, 4, 5, 6, 7, 8]
    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([2, 4, 6, 8])
  })
  it('should return a list of even numbers given a list of negative numbers', () => {
    const given = [1, -2, 3, -4, 5, -6, -7, 8]
    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([-2, -4, -6, 8])
  })

  it('should return a list of even numbers given a list of decimal numbers', () => {
    const given = [1.23, -2.55, 3.11111, -4, 5, -6, -7, 8]
    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([-4, -6, 8])
  })

  it('should ignore NaN', () => {
    const given = [1.23, -2.55, NaN, -4, NaN, -6, -7, 8]
    const actual = filterEvenNumbers(given)
    expect(actual).toEqual([-4, -6, 8])
  })
})
