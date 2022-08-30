type DeepMerge<T> = {
  [K in keyof T]: T[K]
}
type PartialByKeys<T, K = keyof T> = DeepMerge<{
  [Key in keyof T as Key extends K ? Key : never]?: T[Key]
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }>

{
  interface User {
    name: string
    age: number
    address: string
  }
  type a = PartialByKeys<User, 'name' | 'age'>
  interface UserPartialName {
    name?: string
    age: number
    address: string
  }
}