interface Observer {
    update(event: ModelEvent): void;
}

interface ModelEvent {
    getData(): string;
}

interface Model {
    updateModel(newData: string): void;
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyAll(event: ModelEvent): void;
}

class ObserverImpl implements Observer {
    update(event: ModelEvent): void {
        console.log("Received update! " + event.getData());
    }
}

class UpdateEvent implements ModelEvent {
    constructor(private readonly data: string) {}

    getData(): string {
        return this.data;
    }
}

class DocumentModel implements Model {
    private readonly observers: Observer[] = [];
    private model: string = "Default model";

    updateModel(newData: string) {
        this.model = newData;
        const event = new UpdateEvent(this.model);
        this.notifyAll(event);
    }

    registerObserver(observer: Observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        if (!this.observers.includes(observer)) {
            return;
        }
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notifyAll(event: ModelEvent): void {
        this.observers.forEach((observer) => observer.update(event));
    }
}

const model: Model = new DocumentModel();
const observer1: Observer = new ObserverImpl();
const observer2: Observer = new ObserverImpl();

model.registerObserver(observer1);
model.registerObserver(observer2);
model.updateModel("new data");
model.removeObserver(observer1);
model.updateModel("new data 2");
