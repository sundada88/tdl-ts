type ObjectEntries<T, K = keyof T> = K extends keyof T ? [K, T[K]] : never

{
  interface Model {
    name: string
    age: number
    locations: string[] | null
  }
  type a = ObjectEntries<Model>

  type ToUnion<Arr extends unknown[]> = Arr[number];

   // a => a | b
   type aa = ToUnion<["a", "b"]>;
}