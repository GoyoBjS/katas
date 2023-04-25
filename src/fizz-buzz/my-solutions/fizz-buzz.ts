export const fizzBuzz = (num: number): Array<string | number> => {
  if (isNaN(num)) return []

  return Array.from({ length: num }, (_, k) => {
    if (num < 0) if ((k + 1) % 15 === 0) return 'fizzbuzz'
    if ((k + 1) % 3 === 0) return 'fizz'
    if ((k + 1) % 5 === 0) return 'buzz'
    return k + 1
  })
}
