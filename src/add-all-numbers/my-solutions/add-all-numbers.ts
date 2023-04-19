export const AddAllNumbers = (numbers: number[]) => {
  return numbers.reduce((prevVal, curVal) => prevVal + curVal, 0)
}
