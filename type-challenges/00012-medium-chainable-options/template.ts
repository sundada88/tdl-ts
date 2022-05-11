/*

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

  => {
      name: 'another name',
    }
    就是将options的第一个参数作为key，然后第二个参数作为 value，且后续的key不会覆盖之前的key

    1. 因为是链式操作，所以 options 返回的是 Chainable
    2. 因为链式操作，所以需要一个泛型来存储
        type Chainable<T extends object = {}> = {
          option(key,value): any,
          get(): any 
        }
    3. 进行 option 的操作
        如果 key 在 T 的 keys 中，那么就不需要了

        type Chainable<T extends object = {}> = {
          option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & {[P in K] : V}>,
          get(): any 
        }
    4. 处理 get 
        get 返回的是 T

        type Chainable<T extends object = {}> = {
          option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & {[P in K] : V}>,
          get(): T 
        }
*/
type Chainable<T extends object = {}> = {
  option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & { [P in K]: V }>
  get(): T
}

