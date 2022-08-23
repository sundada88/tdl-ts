type PercentageParser<A extends string, Sign extends string = A extends `${infer Sign extends '+' | '-'}${string}` ? Sign : '', Percent extends string = A extends `${string}%` ? '%' : ''> = never

// type PercentageParser<A extends string,
//   Sign extends string = A extends `${infer Sign extends '+' | '-'}${string}` ? Sign : '',
//   Percent extends string = A extends `${string}%` ? '%' : '',
//   > = A extends `${Sign}${infer Value}${Percent}` ? (
//     [Sign, Value, Percent]
//   ) : [Sign, '', Percent]
{
  type a = PercentageParser<'+100%'>
}