/**
 * desc: 链表实现
 */

//  节点类
 class Node {
     constructor (element) {
        this.element = element;
        this.next = null;
     }
 }

//  链表类
class LList {
    constructor () {
        const HEAD = 'head';
        this.head = new Node (HEAD);
    }

    // 查找方法，找到对应的item
    find (item) {
        let curNode = this.head;
        while (curNode !== item) {
            curNode = curNode.next;
        }
        return curNode;
    }

    // 插入方法，在对应节点后面插入新元素
    insert (newElement, item) {
        let newNode = new Node(newElement),
            current = this.find(item);
        
        newNode.next = current.next;
        current.next = newNode;
    }

    // 显示链表中的元素
    display () {
        let current = this.head;
        while (current.next !== null) {
            console.log(current.next.element);
            current = current.next;
        }
    }

    // 找到item对应的previous节点
    findPrev (item) {
        let current = this.head;
        while ((current.next !== null) && (current.next.element !== item)) {
            current = current.next;
        }
        return current;
    }

    // 删除方法
    remove (item) {
        let prevNode = this.findPrev(item);
        prevNode.next = prevNode.next.next;
    }
}


/**
 * desc: 双向链表的实现
 */