class LinkedListNode {

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    insertBefore(value, addValue) {
        const node = new LinkedListNode(addValue);
        let currentNode = this.head;
        if (currentNode.value === value) {
            node.next = currentNode;
            this.head = node;
            return;
        }
        while (currentNode) {
            if (currentNode.next.value === value) {
                node.next = currentNode.next;
                currentNode.next = node;
                break;
            }

            currentNode = currentNode.next;
        }
    }

    insertAfter(value, addValue) {
        let node = new LinkedListNode(addValue);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                node.next = currentNode.next;
                currentNode.next = node;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    includes(v) {
        let currentNode = this.head;

        while (currentNode) {
            if (v === currentNode.value) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    tostring() {
        let str = '';
        let currentNode = this.head;
        while (currentNode) {
            str = str + `{${currentNode.value}} ->`;

            currentNode = currentNode.next;
        }
        str = str + `NULL`;

        return str;
    }

}
module.exports=LinkedList