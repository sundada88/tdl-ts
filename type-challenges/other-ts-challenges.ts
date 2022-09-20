{
  //1. Chunk<[1, 2, 3, 4, 5], 2> => [[1, 2], [3, 4], [5]]
  type Chunk<Arr extends unknown[], ItemLen extends number, CurItem extends unknown[] = [], Res extends unknown[] = []> = Arr extends [infer First, ...infer Rest]
    ? CurItem['length'] extends ItemLen
    ? Chunk<Rest, ItemLen, [First], [...Res, CurItem]>
    : Chunk<Rest, ItemLen, [...CurItem, First], Res>
    : [...Res, CurItem]

  type a = Chunk<[1, 2, 3, 4, 5], 3>

  // <------------------------------------------------>
  // 2. TupleToNestedObject<[a, b, c], string> => {a: { b: {d: string}}}
  type Type = number | string | symbol
  // type TupleToNestedObject<Tuple extends unknown[], Value> = Tuple extends [infer First, ...infer Rest] ? { [key in First as key extends keyof any ? key : never]: TupleToNestedObject<Rest, Value> } : Value
  type TupleToNestedObject<T extends unknown[], V> = T extends [infer F, ...infer R] ? {[K in F as K extends keyof any ? K : never]: TupleToNestedObject<R, V>} : V
  type aa = TupleToNestedObject<[1, 2, 3], number>
  type aaa = TupleToNestedObject<[1, 2, 3], 'aaa'>
  type aaaa = TupleToNestedObject<[1, 2, 3], undefined>
  type aaaaa = TupleToNestedObject<[1, 2, undefined], undefined>

  // <------------------------------------------------>
  // 3. PartialObjectPropByKeys<{a: 1, b: 2, c: 3}, 'a'|'b'> => {readonly a: 1, readonly b: 2, c: 3}
  type ObjType = { a: 1, b: 2, c: 3 }
  type MergeObj<T> = {
    [K in keyof T]: T[K]
  }
  type PartialObjectPropByKeys<Obj extends Record<string, any>, Key extends keyof any> = MergeObj<{
    readonly [key in keyof Obj as key extends Key ? key : never]: Obj[key]
    } & {
      [key in keyof Obj as key extends Key ? never : key]: Obj[key]
    }
  >
    type PartialObjectPropByKeys1 = PartialObjectPropByKeys<ObjType, 'a' | 'b'>

  // <------------------------------------------------>
  // 4. UnionToTuple<{a: 1} | {b: 2}> => {a: 1} & {b: 2}
  {
    type UnionToIntersection<U> =
      (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
      ? R
      : never
    type UnionType = { a: 1 } | { b: 2 }
    type UnionToIntersection1 = UnionToIntersection<UnionType>
  }

  // <------------------------------------------------>
  // 5. 怎么去掉两个对象属性的key
  type type1 = {
    name: string,
    age: number,
    gender: string
  }
  type type2 = {
    name: string,
    age: number,
  }
  // 将 keyof (type1 & type2) 中去掉 keyof (type1 | type2)
  type Diff<A, B> = {
    [K in Exclude<keyof (A & B), keyof (A | B)>]: (A & B)[K]
  }
  type deleteType = Diff<type1, type2>

  // <------------------------------------------------>
  // 6. UnionToTuple
  //    1. a | b => (() => a & () => b)
  //    2. ReturnType<(() => a & () => b)> === b
  //    3. 将 b 从 a | b中去除，然后递归
  {
    // type UnionToIntersection<U> = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never

    // type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer ReturnType ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType] : []

    type UnionToIntersection<T> = (T extends T ? (x: T) => unknown : never) extends (x: infer R) => unknown ? R : never

    type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer ReturnType ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType] : []


    type a = UnionToTuple<1 | 2 | { a: 23 }>
  }

  // <------------------------------------------------>
  // 7. a=1&b=2&c=3&d=4
  type MergeParams<OneParam extends Record<string, any>, OtherParam extends Record<string, any>> = {
    [Key in keyof OneParam | keyof OtherParam]: Key extends keyof OneParam ? Key extends keyof OtherParam ? OneParam[Key] extends keyof OtherParam[Key] ? OneParam[Key] : [OneParam[Key], OtherParam[Key]] : OneParam[Key] : Key extends keyof OtherParam ? OtherParam[Key] : never
  }
  type ParseParm<T extends string> = T extends `${infer Fir}=${infer Res}` ? { [key in Fir]: Res } : {}
  type ParseQueryString<Str extends string> = Str extends `${infer Fir}&${infer Res}` ? MergeParams<ParseParm<Fir>, ParseQueryString<Res>> : ParseParm<Str>

  {

    type a = ParseQueryString<'a=1&b=2&c=3&d=4'>
  }

  // <------------------------------------------------>
  // 8. [1, [[2, 3]]] => [1, [2, 3]]
  type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R] ? [...F extends [...infer K] ? K : [F], ...FlattenOnce<R>] : T
  {
    type a = FlattenOnce<[1, [[2, 3]]]>
  }

  // <------------------------------------------------>
  // 9. 根据数量来决定 flatten 几层 
  type FlattenDepth<T extends unknown[], Time extends number = 1, Res extends  unknown[] = []> = Res['length'] extends Time ? T : T extends FlattenOnce<T> ? T : FlattenDepth<FlattenOnce<T>, Time, [unknown, ...Res]>

  {
    type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>
  }
}


