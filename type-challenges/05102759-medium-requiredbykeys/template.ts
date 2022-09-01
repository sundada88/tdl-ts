type DeepMergeOther<T> = {
  [K in keyof T]: T[K]
}
type RequiredByKeys<T, K = keyof T> = DeepMergeOther<
  {
    [Key in keyof T as Key extends K ? Key : never]-?: T[Key]
  } & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }
>

{
  interface User {
    name?: string
    age?: number
    address?: string
  }
  type a = RequiredByKeys<User, 'name'>
}