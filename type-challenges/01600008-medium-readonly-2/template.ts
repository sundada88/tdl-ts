/*
  将 T 中的 K 的键值都改为 readonly
  1. 找出 T 中的 K 改成 readonly => {readonly [P in K]: T[P]}
  2. 找出 T 中不是 K 的留下来 => {[P in keyof T as P extends K ? never : P]: T[P]}
  3. 找 1 和 2 中的并集
  4. K 有可能是 空的， 那么需要将所有的都变成 readonly => K extends keyof T = keyof T
*/
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
  }

// { readonly [P in K]: T[P] } & { [P in keyof T as P extends K ? never : P]: T[P] }

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
type aa = MyReadonly2<Todo1, 'title'>