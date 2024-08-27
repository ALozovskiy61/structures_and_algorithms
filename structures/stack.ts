class StackNode<T> {
  value: T;
  next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
class Stack<T>{
  root: StackNode<T> | null
  length: number;

  constructor() {
    this.root = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }

  push(value: T): number {
    let oldFirst = this.root;
    this.root = new StackNode(value);
    this.root.next = oldFirst;
    this.length++

    return this.length
  }

  pop(): T | undefined {
    if(this.isEmpty()) return;
    let oldFirst = this.root;
    if (oldFirst !== null) {
      this.root = oldFirst.next;
      this.length--;
      return oldFirst.value
    }
  }
  
  print(): void {
    let node = this.root;
    while (node !==null) {
      console.log(node.value)
      node = node.next
    }
  }
}