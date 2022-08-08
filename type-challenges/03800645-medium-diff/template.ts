type Diff<O, O1> = {
  [key in keyof O | keyof O1 as key extends keyof O ? key extends keyof O1 ? O[key] extends O1[key] ? never : key : key : key]: key extends keyof O ? key extends keyof O1 ? O[key] extends O1[key] ? never : O1[key] : O[key] : key extends keyof O1 ? O1[key] : never
}

{
  type Foo = {
    name: string
    age: string
  }
  type Bar = {
    name: string
    age: string
    gender: number
  }
  type a = Diff<Foo, Bar>
}