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

 //  节点类
class Node {
    construstor (element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

//  链表类
class LList {
    construstor () {
        const HEAD = 'head';
        this.head = new Node (HEAD);
    }
    
    // 与单向链表一样，无需修改
    // 查找方法，找到对应的item
    find (item) {
        let curNode = this.head;
        while (curNode !== item) {
            curNode = curNode.next;
        }
        return curNode;
    }

    findLast (item) {
        let current = this.head;
        if (current.next !== null) {
            current = current.null;
        }
        return current;
    }

    // 插入方法，在对应节点后面插入新元素
    insert (newElement, item) {
        let newNode = new Node(newElement),
            current = this.find(item);
        
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    // 与单向链表一样，无需修改
    // 显示链表中的元素
    display () {
        let current = this.head;
        while (current.next !== null) {
            console.log(current.next.element);
            current = current.next;
        }
    }

    displayReverse () {
        let current = this.findLast();
        while (current.previous !== null) {
            console.log(current.element);
            current = current.previous;
        }
    }

    // 找到item对应的previous节点
    findPrev (item) {
        let current = this.find(item);
        return current.previous;
    }

    // 删除方法
    remove (item) {
        let current = this.find(item);
        if (current.next !== null) {
            current.previous.next = current.next;
            current.next.previous = current.previous;
            current.next = null;
            current.previous = null;
        }
    }
}