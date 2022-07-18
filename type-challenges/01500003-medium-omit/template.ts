type MyOmit<T, K extends keyof T> = {
  [key in keyof T as  key extends K ? never : key]: T[key]
}

// 将 T 中 K 的给去掉




