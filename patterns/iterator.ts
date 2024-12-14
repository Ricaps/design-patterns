interface IteratedCollection {
    createIterator(): Iter;
}

interface IterNode {
    getData(): string;
}

interface Iter<T = IterNode> {
    hasNext(): boolean;
    next(): T;
}

class IterImpl implements Iter {
    private nextIndex: number = 0;

    constructor(private dataArray: IterNode[]) {}

    hasNext(): boolean {
        return this.nextIndex != this.dataArray.length;
    }

    next(): IterNode {
        return this.dataArray[this.nextIndex++];
    }
}

class IterNodeImpl implements IterNode {
    constructor(private readonly data: string) {}

    static of(data: string) {
        return new IterNodeImpl(data);
    }

    getData(): string {
        return this.data;
    }
}

class IteratedCollectionImpl implements IteratedCollection {
    private data: IterNode[] = [
        IterNodeImpl.of("1"),
        IterNodeImpl.of("2"),
        IterNodeImpl.of("3"),
        IterNodeImpl.of("4"),
        IterNodeImpl.of("5"),
    ];

    createIterator(): Iter {
        return new IterImpl(this.data);
    }
}

const collection = new IteratedCollectionImpl();
const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next().getData());
}
