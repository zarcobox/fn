function one(variable: any, object: object | [] | undefined) {
  return object ? (object as any)[variable] : variable
}

async function asyncForEach(array: [] | any[], callback: any) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export default {
  one,
  asyncForEach
}
