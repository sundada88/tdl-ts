type ArrToUnion<Arr extends unknown[]> = Arr[number]
type addPrefix<T, S extends string> = `${S}${T & string}`
{
  type a = ArrToUnion<[]>
  type b = addPrefix<'1' | '2', '__'>
}
type BEM_COPY<B extends string, E extends string[], M extends string[]> = `${B}${E['length'] extends 0 ? '' : addPrefix<ArrToUnion<E>, '__'>}${M['length'] extends 0 ? '' : addPrefix<ArrToUnion<M>, '--'>}`
{
  type c = BEM_COPY<'btn', ['price'], ['warning', 'success']>
}