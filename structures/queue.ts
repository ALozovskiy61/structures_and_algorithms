class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
class Queue<T>{
  last: QueueNode<T> | null
  first: QueueNode<T> | null
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0
  }
  isEmpty(): boolean {
    return this.first === null
  }

  size(): number {
    return this.length
  }
  
  push(value: T): number {
    let oldLast = this.last;
    this.last = new QueueNode(value);

    if (this.isEmpty()) this.first = this.last;
    else {
      if (oldLast !== null) oldLast.next = this.last; 
    }

    return ++this.length;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      this.last == null;
      return;
    }

    let itemValue = this.first?.value;
    if (this.first !== null) {

    this.first = this.first.next;

    this.length--
    }

    return itemValue
  }

  print(): void {
    let current = this.first;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}