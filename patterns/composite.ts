interface Component {
    hasChild(): boolean;
}

class Leaf implements Component {
    constructor(private data: string) {}

    getChildren(): Component[] {
        return [];
    }

    hasChild(): boolean {
        return false;
    }

    print(): void {
        console.log(this.data);
    }
}

interface Composite extends Component {
    getChildren(): Component[];
    addChildren(...children: Component[]): void;
}

class CompositeImpl implements Composite {
    private children: Component[] = [];

    addChildren(...children: Component[]): void {
        this.children.push(...children);
    }

    getChildren(): Component[] {
        return this.children;
    }

    hasChild(): boolean {
        return this.children.length !== 0;
    }
}

const rTree: Composite = new CompositeImpl();
const leaf1 = new Leaf("1");

const composite: Composite = new CompositeImpl();
const leaf2 = new Leaf("2");
const leaf3 = new Leaf("3");

composite.addChildren(leaf2, leaf3);
rTree.addChildren(leaf1, composite);

const traverse = (components: Component[]) => {
    components.forEach((component) => {
        if (component instanceof Leaf) {
            component.print();
        } else if (component instanceof CompositeImpl) {
            traverse(component.getChildren());
        }
    });
};

traverse(rTree.getChildren());
