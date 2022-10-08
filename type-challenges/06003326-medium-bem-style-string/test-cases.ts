import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM_COPY<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM_COPY<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM_COPY<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]