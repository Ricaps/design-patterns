class Memento {
    constructor(private readonly state: string) {}

    getState(): string {
        return this.state;
    }
}

class Originator {
    constructor(private data: string) {}

    save(): Memento {
        return new Memento(this.data);
    }

    restore(memento: Memento): void {
        this.data = memento.getState();
    }

    print(): void {
        console.log(this.data);
    }

    setData(data: string): void {
        this.data = data;
    }
}

class HistoryStore {
    private store: Memento[] = [];

    constructor(private readonly originator: Originator) {}

    changeData(data: string): void {
        this.store.push(this.originator.save());
        this.originator.setData(data);
    }

    restore(): void {
        const memento = this.store.pop();
        if (!memento) {
            return;
        }
        this.originator.restore(memento);
    }
}

const originator = new Originator("hahaha");
const store = new HistoryStore(originator);

store.changeData("hahaha2");
store.changeData("hahaha3");
store.changeData("hahaha4");

originator.print();
store.restore();

originator.print();
store.restore();

originator.print();
store.restore();

originator.print();
store.restore();

originator.print();
store.restore();
