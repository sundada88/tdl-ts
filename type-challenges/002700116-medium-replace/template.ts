type space = ''
type Replace<S extends string, From extends string, To extends string> = From extends space ? S : S extends `${infer Fir}${From}${infer Rest}` ? `${Fir}${To}${Rest}` : S

type aaaaaa = Replace<'foobarbar', '', 'foo'>