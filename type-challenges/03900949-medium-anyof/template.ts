type AnyOf<T extends readonly any[]> = T extends [] ? false : T extends [infer Fir, ...infer Rest] ? (Fir extends ('' | 0 | false | []) ? AnyOf<Rest> : Fir extends {} ? keyof Fir extends never ? false : true : true) : true