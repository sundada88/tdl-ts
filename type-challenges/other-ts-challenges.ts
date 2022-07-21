{
  //1. Chunk<[1, 2, 3, 4, 5], 2> => [[1, 2], [3, 4], [5]]
  type Chunk<Arr extends unknown[], ItemLen extends number, CurItem extends unknown[] = [], Res extends unknown[] = []> = Arr extends [infer First, ...infer Rest]
    ? CurItem['length'] extends ItemLen
    ? Chunk<Rest, ItemLen, [First], [...Res, CurItem]>
    : Chunk<Rest, ItemLen, [...CurItem, First], Res>
    : [...Res, CurItem]

  type a = Chunk<[1, 2, 3, 4, 5], 3>
}