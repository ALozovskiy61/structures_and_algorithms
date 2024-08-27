class Node<T> {
	value: T;
	next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList<T> {
	root: Node<T> | null;
  size: number;
	constructor() {
			this.size = 0;
			this.root = null;
	}

	add(value: T): number {
			if (this.size === 0) {
					this.root = new Node(value);
			} else {
					let node = this.root;
					while (node && node.next) {
							node = node.next;
					}
					if (node) {
            let newNode = new Node(value);
            node.next = newNode;
        }
			}
			this.size += 1;
			return this.size; 
	}

	remove(value: T): T | null {
    if (this.root === null) return null;

    if (this.root.value === value) {
        const removedValue = this.root.value;
        this.root = this.root.next;
        this.size--;
        return removedValue;
    }

    let currentNode = this.root;

    while (currentNode.next !== null) {
        if (currentNode.next.value === value) {
            const removedValue = currentNode.next.value;
            currentNode.next = currentNode.next.next;
            this.size--;
            return removedValue;
        }
        currentNode = currentNode.next;
    }

    return null;
	}

	find(callback: (value: T) => boolean): Node<T> | null {
			let currentNode = this.root
			while(currentNode) {
					if(callback(currentNode.value)) return currentNode
					currentNode = currentNode.next
			}
			return null
	}

	getSize(): number {
			return this.size
	}

	print(): void {
			let result: T[] = [];
			let node = this.root
			while (node) {
					result.push(node.value)
					node = node.next
			}
			console.log(result);;
	}

	toArray(): Node<T>[] {
    const nodes: Node<T>[] = [];
    let currentNode = this.root;

    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

export default LinkedList
