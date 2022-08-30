type PickByType<T, U> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key]
}