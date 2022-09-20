// type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R] ? [...F extends [...infer K] ? K : [F], ...FlattenOnce<R>] : T
type FlattenOnce<T extends unknown []> = T extends [infer F, ...infer R] ? [...F extends [...infer K] ? K : [F], ...FlattenOnce<R>] : T
type FlattenDepth<Arr extends unknown [], Time extends number = 1, Count extends unknown [] = []> = Count['length'] extends Time ? Arr : Arr extends FlattenOnce<Arr> ? Arr : FlattenDepth<FlattenOnce<Arr>, Time, [unknown, ...Count]>


{
  type a = FlattenOnce<[[1, 2]]>
  type c = FlattenOnce<[2, [[1, 2]]]>
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>
}