type MyExclude<T, U> = T extends U ? never : T

type a = MyExclude<'a' | 'b', 'a'>
