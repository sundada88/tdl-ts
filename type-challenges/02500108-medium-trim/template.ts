type _Space = ' ' | '\n' | '\t'
type _TrimLeft<S extends string> = S extends `${_Space}${infer Rest}` ? _TrimLeft<Rest> : S
type _TrimRight<S extends string> = S extends `${infer Rest}${_Space}` ? _TrimRight<Rest> : S

type Trim<S extends string> = _TrimLeft<_TrimRight<S>>