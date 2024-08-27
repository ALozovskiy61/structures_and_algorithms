import LinkedList from './LinkedList';

interface HashValue<T> {
  key: string;
  value: T;
}

const defaultHashTableSize = 40;

class HashTable<T> {
  buckets: LinkedList<HashValue<T>>[];
  keys: { [key: string]: number };

  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList<HashValue<T>>());
    this.keys = {};
  }

  hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }

  set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((callback: HashValue<T>) => callback.key === key);

    if (!node) {
      bucketLinkedList.add({ key, value });
    } else {
      node.value.value = value;
    }
  }

  delete(key: string): T | null {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((callback: HashValue<T>) => callback.key === key);

    if (node) {
      const removedValue = bucketLinkedList.remove(node.value);
      return removedValue ? removedValue.value : null;
    }

    return null;
  }

  get(key: string): T | undefined {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find((callback: HashValue<T>) => callback.key === key);

    return node ? node.value.value : undefined;
  }

  has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys(): string[] {
    return Object.keys(this.keys);
  }

  getValues(): T[] {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, [] as T[]);
  }
}