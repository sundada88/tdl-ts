type If<C extends boolean | number, T, F> = C extends true ? T : F

