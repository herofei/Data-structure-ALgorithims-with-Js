/**
 * desc: 二叉查找树的实现
 */

//  node节点类
class Node {
    constructor (data = null, left = null, right = null) {
        // 自身的数据
        this.data = data;

        // 左节点
        this.left = left;

        // 右节点
        this.right = right;
    }

    show () {
        return this.data;
    }
}

// 二叉查找树类
class BST {
    constructor () {
        this.root = null;
    }

    // 插值
    insert (data) {
        let node = new Node(data);

        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root,
                parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                     if (current === null) {
                        parent.left = node;
                        break;
                     }
                } else {
                    current = current.right;
                    if (current === null) {
                        parrent.right = node;
                        break;
                    }
                }
            }
        }
    }

    // 中序遍历
    // 升序访问树中的所有节点，先访问左子树，再访问根节点，最后访问右子树
    inOrder (node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.show() + '\n');
            this.inOrder(node.right);
        }
    }

    // 先序遍历
    // 先访问根节点，然后再以同样的方式访问左子树和右子树
    preOrder (node) {
        if (node !== null) {
            console.log(node.show() + '\n');
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // 后序遍历
    // 先访问有叶子节点，从左子树到右子树，再到根节点
    postOrder (node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show() + '\n');
        }
    }

    // 查找BST的最小值
    getMin () {
        return this._getSmallest(this.root);
    }

    _getSmallest (node = null) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // 查找BST的最大值
    getMax () {
        return this._getBiggest(this.root);
    }

    _getBiggest (node = null) {
        let current = node;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find (data) {
        let current = this.root,
            curData = null;
        while (current !== null) {
            curData = current.data;
            if (curData === data) {
                return current;
            } else if (curData > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    remove (data) {
        this._removeNode(this.root, data);
    }

    _removeNode (node, data) {
        if (node === null) {
            return null;
        }

        if (data === node.data) {
            let nodeLeft = node.left,
                nodeRight = node.right;
            // 没有子节点的节点
            if (nodeLeft === null && nodeRight === null) {
                return null;
            }

            // 没有左节点的节点
            if (nodeLeft === null) {
                return nodeRight;
            }

            // 没有右节点的节点
            if (nodeRight === null) {
                return nodeLeft;
            }

            // 有两个子节点的节点
            let tempData = _getSmallest(node.right);
            node.data = tempData.data;
            node.right = this._removeNode(node.right, tempData.data);
        } else if (data < node.data) {
            node.left = this._removeNode(node.left, data);
        } else {
            node.right = this._removeNode(node.right, data);
        }

        return node;
    }
}