import { AddAllNumbers } from './add-all-numbers'
describe('', () => {
  it('should return 0 when the list is empty', () => {
    const given: number[] = []
    const actual = AddAllNumbers(given)

    expect(actual).toBe(0)
  })

  it('should return the unique number in the array', () => {
    const given: number[] = [1]
    const actual = AddAllNumbers(given)

    expect(actual).toBe(1)
  })

  it('should return the total of all elements in array', () => {
    const given: number[] = [1, 4, 5, 10]
    const actual = AddAllNumbers(given)

    expect(actual).toBe(20)
  })
})
