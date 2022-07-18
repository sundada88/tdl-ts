type BuildArray<Num extends number, Ele = unknown, Res extends unknown[] = []> = Res['length'] extends Num ? Res : BuildArray<Num, Ele, [...Res, Ele]>

type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']

// Num1 - Num2 
type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest] ? Rest['length'] : never

// Num1 * Num2
type Multiply<Num1 extends number, Num2 extends number, Res extends unknown[] = []> = Num1 extends 0 ? Res['length'] : Multiply<Subtract<Num1, 1>, Num2, [...BuildArray<Num2>, ...Res]>

// Num1 / Num2

type Divide<Num1 extends number, Num2 extends number, Res extends unknown[] = []> = Num1 extends 0 ? Res['length'] : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...Res]>

type StrLen<str extends string, Res extends unknown[] = []> = str extends `${string}${infer res}` ? StrLen<res, [unknown, ...Res]> : Res['length']

type GreaterThan<Num1 extends number, Num2 extends number, Res extends unknown[] = []> = Res['length'] extends Num1
  ? Num2
  : Res['length'] extends Num2
  ? Num1
  : GreaterThan<Num1, Num2, [unknown, ...Res]>

// bemResult => guang__aaa--warning |  guang__bbb--warning | guang__aaa--success |  guang__bbb--success
type BEM<Block extends string, Element extends string[], Modifiers extends string[]> = `${Block}__${Element[number]}--${Modifiers[number]}`

type IsUnion<A, B = A> = A extends A ? [A] extends [B] ? false : true : never


type num1 = Add<4, 2>
type num2 = Subtract<4, 2>
type num3 = Multiply<14, 2>
type num4 = Divide<21, 3>
type num5 = StrLen<'abcdefghijklmn'>
type num6 = GreaterThan<16, 16>
type bemResult = BEM<"guang", ["aaa", "bbb"], ["warning", "success"]>;