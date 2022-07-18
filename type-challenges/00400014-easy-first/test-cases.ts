import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];




// type t1 = First<[]>
// 知识点
// 如果是一个 【】 空数组的话，那么获取的 【0】 是 undefined

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T extends [infer first, ...infer tail] ? first : never