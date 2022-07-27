import { Equal } from "@type-challenges/utils";

// type Equal<T, U> = T extends U ? U extends T ? true : false : false

// type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false


// type type1 = ['a', 'b', 'c']
// type type2 = ['a']

// type a = Includes<type1, type2>

// type MyEqual<T, U> = T extends U ? U extends T ? true : false : false

// type b = MyEqual<type1, type2>