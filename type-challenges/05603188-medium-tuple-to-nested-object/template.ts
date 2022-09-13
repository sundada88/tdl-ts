type TupleToNestedObject<T, U> = T extends [infer Fir, ...infer Rest] ? {[Key in Fir & string]: TupleToNestedObject<Rest, U>} : U
{
  type a = TupleToNestedObject<[1, 2], number>
}