import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsMyUnion<string>, false>>,
  Expect<Equal<IsMyUnion<string | number>, true>>,
  Expect<Equal<IsMyUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsMyUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsMyUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsMyUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsMyUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsMyUnion<string | never>, false>>,
  Expect<Equal<IsMyUnion<string | unknown>, false>>,
  Expect<Equal<IsMyUnion<string | any>, false>>,
  Expect<Equal<IsMyUnion<string | 'a'>, false>>,
  Expect<Equal<IsMyUnion<never>, false>>,
]