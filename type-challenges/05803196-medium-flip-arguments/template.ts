
type ReverseT<T extends any[]> = T extends [infer R, ...infer K] ? [...Reverse<K>, R] : []; 
type FlipArguments<T extends Function> = T extends (...args: infer Args) => infer returnType ? (...args: ReverseT<Args>) => returnType  : never