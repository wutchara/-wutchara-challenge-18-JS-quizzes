console.log('============================');

class Node {
    actionTag;
    leftNode;
    rightNode;

    downNode;
    upNode;

    moveRight() {
        if (!this.rightNode) {
            this.rightNode = new Node();
            this.actionTag = 'r';
            return true
        } else {
            // can't move
            return false;
        }
    }

    moveDown() {
        if (!this.downNode) {
            this.downNode = new Node();
            this.actionTag = 'd';
            return true
        } else {
            // can't move
            return false;
        }
    }
}

// const root = new Node();
// console.log('root', root);
// root.moveRight();
// console.log('root', root);

class Table {
    root;
    currentNode;
    paths = [];

    xSize;
    ySize;

    x;
    y;

    constructor(x, y) {
        this.xSize = x;
        this.ySize = y;
        this.root = new Node();
        this.currentNode = this.root;

        this.x = 0;
        this.y = 0;
    }

    canMoveRight() {
        return this.x < this.xSize;
    }

    canMoveDown() {
        return this.y < this.ySize;
    }


    findDirection() {
        let isEnding = false;
        // right first
        const status = this.canMoveRight() && this.currentNode.moveRight() || false;

        if (!status) {
            if (this.canMoveDown()) {
                this.currentNode.moveDown();
                this.currentNode = this.currentNode.downNode;
                this.y += 1;
            } else {
                // Finished
                console.log('============ END ==========');
                isEnding = true;
            }
        } else {
            this.currentNode = this.currentNode.rightNode;
            this.x += 1;
        }

        return isEnding;
    }

    findPath() {
        this.x = 0;
        this.y = 0;
        this.currentNode = this.root;
        let isFinished = false;
        do {
            isFinished = this.findDirection();
        } while (!isFinished);

        return this;
    }

    // printPath(node) {
    //     if (!node) {
    //         return '';
    //     }

    //     return (node.actionTag || '') + this.printPath(node.rightNode || node.downNode);
    // }
}

// 2 x 2
const table = new Table(2, 2);
console.log('table', table.root);

// table.findDirection();
// console.log(1, 'table', table);

// table.findDirection();
// console.log(2, 'table', table);

// table.findDirection();
// console.log(3, 'table', table);

// table.findDirection();
// console.log(4, 'table', table);

// table.findDirection();
// console.log(5, 'table', table);

console.log('table', table.findPath());
console.log('path', JSON.stringify(table));

console.log('===== 2');
console.log('table', table.findPath());
console.log('path', JSON.stringify(table));

console.log('============================');