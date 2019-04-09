/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
interface LinkedListNode<T> {
  val: T;
  next: LinkedListNode<T>;
}

var deleteNode = function(node: LinkedListNode<number>) {
  node.val = node.next.val;
  node.next = node.next.next;
};
