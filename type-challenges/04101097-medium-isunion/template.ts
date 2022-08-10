type IsMyUnion<T, U = T> = [T] extends [never] ? false : T extends U ? [U] extends [T] ? false : true : false
{
  type a = IsMyUnion<never>

  type b = never extends never ? 1 : 2
}