type MyCapitalize<S extends string> = S extends `${infer Fir}${infer Rest}` ? `${Uppercase<Fir>}${Rest}` : S


function extend<T, U>(first: T, second: U): T & U {
  const obj = {} as T & U
  for (let id in first) {
    obj[id] = first[id] as any
  }
  for (let id in second) {
    if (!obj.hasOwnProperty(id)) {
      obj[id] = second[id] as any
    }
  }
  return obj
}
