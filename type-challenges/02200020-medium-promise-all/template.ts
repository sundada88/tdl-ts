declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)