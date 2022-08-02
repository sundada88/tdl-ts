type Merge<F, S> = {
  [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : never
}
{
  type Foo = {
    a: number
    b: string
  }
  type Bar = {
    b: number
    c: boolean
  }
  type a = Merge<Foo, Bar>
}