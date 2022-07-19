type MyCapitalize<S extends string> = S extends `${infer Fir}${infer Rest}` ? `${Uppercase<Fir>}${Rest}` : S
