type MyParameters<T extends (...args: any[]) => any> = T extends (...Args: infer A) => any ? A : never
