type KebabCase<S extends string> = S extends `${infer Fir}${infer Res}` ? Res extends Uncapitalize<Res> ? `${Uncapitalize<Fir>}${KebabCase<Res>}` : `${Uncapitalize<Fir>}-${KebabCase<Res>}` : S


{
  // type UnionToIntersection<U> =
  //   (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
  //   ? R
  //   : never

  type UnionToIntersection<U> = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never
  // type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer ReturnType ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType] : []
  type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer ReturnType ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType] : []
  type UnionToTupleRes = UnionToTuple<'a' | 'b' | 'c'>
}