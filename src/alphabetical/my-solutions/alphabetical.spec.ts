import { alphabetical } from './alphabetical'

describe('a list of alphabetical', () => {
  it('should return an empty list given an empty list', () => {
    const given: string[] = []
    const actual = alphabetical(given)

    expect(actual).toEqual(given)
  })
  it('should return the same string given a list of 1 item', () => {
    const given: string[] = ['a']
    const actual = alphabetical(given)

    expect(actual).toEqual(['a'])
  })
  it('should return a sorted array of n elements', () => {
    const given: string[] = ['b', 'a']
    const actual = alphabetical(given)

    expect(actual).toEqual(['a', 'b'])
  })
  it('should return a sorted array of n elements', () => {
    const given: string[] = ['burro', 'barril', 'avestruz', 'zamora', 'coche']
    const actual = alphabetical(given)

    expect(actual).toEqual(['avestruz', 'barril', 'burro', 'coche', 'zamora'])
  })
  it('should return a sorted array of n elements', () => {
    const given: string[] = ['montón', 'monto', 'montó']
    const actual = alphabetical(given)

    expect(actual).toEqual(['monto', 'montó', 'montón'])
  })
})
