// 从联合类型 U 中挑选出来 type 是 T 的类型
type LookUp<U, T> = U extends { type: T } ? U : never

interface Cat1 {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog1 {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat1 | Dog1, 'dog'> // expected to be `Dog1`