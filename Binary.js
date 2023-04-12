class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    add (value) {
        if(this.value === value) return;
        if(value < this.value) {
            this.addLeft(value);
        } else {
            this.addRight(value);
        }
    }

    addLeft (value) {
        if(this.left) {
            return this.left.add(value);
        }
        this.left = new TreeNode (value);
    }
    addRight (value) {
        if(this.right) {
            return this.right.add(value);
        }
        this.right = new TreeNode (value);
    }
}

class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    add(value) {
        if(this.root) {
            return this.root.add(value);
        }
        this.root = new TreeNode(value);
    }
    find(value) {
        if (!this.root) return undefined;
        let current = this.root;
        while(true) {
            if (current === undefined) return;
            if(current.value === value) {
                console.log("Found");
                return current;
            }
            if (value < current.value) {
                current = current.left   
            } else {
                current = current.right
            }
        }
    }
    rootB() {
        console.log(this.root);
    }
}

const tree = new BinaryTree();
tree.add(23);
tree.find(23);
tree.rootB();
