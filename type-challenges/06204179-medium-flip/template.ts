type Flip<T extends object> = {
  [K in keyof T as (T[K] extends number ? `${T[K]}` : T[K] extends string ? T[K] : T[K] extends boolean ? T[K] extends true ? 'true' : 'false' : never)]: K
}
{
  type a = Flip<{ pi: 3.14, bool: true }>
}