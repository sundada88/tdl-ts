type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // T 是一个数组， 通过 K in T[number] 遍历数组
  // T[number] => 其实是一个 union 类型: [1, 2, 3] => 1|2|3
  [K in T[number]]: K
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof array -> 索引
type r = TupleToObject<typeof tuple>;

// js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历 array:  ts => T[number]
