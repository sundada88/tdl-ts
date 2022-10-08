interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// your answers
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []

{
  type a = InorderTraversal<{val: 1222, left: null, right: null}>
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const
  
  const tree2 = {
    val: 1,
    left: null,
    right: null,
  } as const
  
  const tree3 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  } as const
  
  const tree4 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  } as const
  type aa = InorderTraversal<null>
}