
type MyAwaited<T extends Promise<any>> = T extends Promise<infer F> ? (F extends Promise<any> ? MyAwaited<F> : F) : T


// 可以理解成一直往 obj 里面取 a 的属性，制止没有了 a 属性
const obj = {
  a: {
    a: {
      a: 'aaa'
    }
  }
}

function getA(obj) {
  while (obj.a) {
    obj = obj.a
    if (!obj.a) break
  }
  return obj
}
// 递归遍历寻找 a 属性
