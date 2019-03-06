/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let arr1 = [];
    let arr2 = [];
    AddToList(l1, arr1);
    AddToList(l2, arr2);
    //直接用Number.parseInt 在遇到较大的数据时会用科学计数法进而产生错误，改用BigInt 可解决此问题。
    const d1 = BigInt(arr1.join(""));
    const d2 = BigInt(arr2.join(""));
    console.log(d1);
    console.log(d2);
    let r = `${d1 + d2}`;
    return ListToNode(r);

};

ListNode.prototype.push = function (s) {
    this.head = this;
    if (this.next === null) {
        this.tail = this.head;
        this.tail.next = new ListNode(s);
    } else {
        while (this.tail != null && this.tail.next != null) {
            this.tail = this.tail.next;
        }
        this.tail.next = new ListNode(s);
    }
}

function AddToList(l, arr) {
    while (l != null) {
        arr.unshift(l.val);
        l = l.next;
    }
    return arr;
}

function ListToNode(list) {
    let len = list.length - 1;
    let node = new ListNode(list[len])
    for (let i = len - 1; i >= 0; i--) {
        node.push(list[i]);
    }
    return node;
}
