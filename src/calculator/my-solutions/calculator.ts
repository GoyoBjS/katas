export const calculator = (operations: string): number => {
  if (!operations) return 0
  const simbols: string[] = operations.split(' ')
  let acc: number = 0
  for (let i = 0; i < simbols.length; i++) {
    const isNumber: number = Number(simbols[i])
    if (!isNaN(isNumber)) {
      acc += Number(simbols[i])
    } else if (simbols[i] === '-') {
      simbols[i + 1] = '-' + simbols[i + 1]
    }
  }

  return acc
}

// export const calculator = (operations: string): number =>{
//   if(!operations) return 0;
//   const simbols: string[] = operations.split(" ");
//   let acc: number = 0;
//   simbols.forEach((symbol: string) =>{
//     const isNumber: number = Number(symbol);
//     if(!isNaN(isNumber)) acc += Number(symbol)
//   })
//   return acc;
// }
//
