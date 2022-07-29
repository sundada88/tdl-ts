type AppendToObject<T, U, V> = {
  [Key in keyof T | U & string]: Key extends keyof T ? T[Key] : V
}


{
  type test1 = {
    key: 'cat'
    value: 'green'
  }
  type a = AppendToObject<test1, 'home', boolean>
}