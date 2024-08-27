class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;
  previous: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList<T> {
  head: NodeItem<T> | null;
  tail: NodeItem<T> | null
  length: number;
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new NodeItem(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.previous = this.tail;

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  delete(value: T): number | null {
    if (!this.head) {
      return null;
    }
  
    let currentNode: NodeItem<T> | null = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        const deletedNode = currentNode;
  
        if (deletedNode === this.head) {
          this.head = deletedNode.next;
  
          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          if (this.tail) {
            this.tail.next = null;
          }
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;
          if (previousNode) previousNode.next = nextNode;
          if (nextNode) nextNode.previous = previousNode;
        }

        this.length--;
        return this.length;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
  find(value: T): NodeItem<T> | null {
    if (!this.head) {
      return null;
    }
  
    let currentNode: NodeItem<T> | null = this.head;
  
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
  
      currentNode = currentNode.next;
    }
  
    return null;
  }
  print(): void {
    const values: T[] = [];
  
    if (this.head === null) {
      console.log(values);
      return;
    }
  
    let current: NodeItem<T> | null = this.head;
  
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
  
    console.log(values);
  }  
}