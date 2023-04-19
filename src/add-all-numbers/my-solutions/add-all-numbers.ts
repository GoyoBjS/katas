export const AddAllNumbers = (numbers: number[]) => {
  if (numbers.length > 0) {
    return numbers.reduce((prevVal, curVal) => prevVal + curVal)
  }
  return 0
}
