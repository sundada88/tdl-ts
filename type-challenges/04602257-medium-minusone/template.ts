type BuildArr<Num, Res extends unknown[] = []> = Res['length'] extends Num ? Res : BuildArr<Num, [...Res, unknown]>
{
  type a = BuildArr<4>
}
type MinusOne<T extends number> = BuildArr<T> extends [...infer Res, unknown] ? Res['length'] : 0
{
  type b = MinusOne<1101>
}