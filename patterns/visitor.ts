interface VisitedElement {
    accept(visitor: Visitor);
    getData(): string;
}

interface Visitor {
    visitEl1(element: Element1);
    visitEl2(element: Element2);
}

class Element1 implements VisitedElement {
    getData(): string {
        return "Element 1 data";
    }

    accept(visitor: Visitor) {
        visitor.visitEl1(this);
    }
}

class Element2 implements VisitedElement {
    getData(): string {
        return "Element 2 data";
    }

    accept(visitor: Visitor) {
        visitor.visitEl2(this);
    }
}

class VisitorImpl implements Visitor {
    visitEl1(element: Element1) {
        console.log(element.getData());
    }

    visitEl2(element: Element2) {
        console.log(element.getData());
    }
}

class Visitor2Impl implements Visitor {
    visitEl1(element: Element1) {
        console.log(element.getData() + " by visitor 2");
    }

    visitEl2(element: Element2) {
        console.log(element.getData() + " by visitor 2");
    }
}

let visitor: Visitor = new VisitorImpl();
const visitedEl1 = new Element1();
const visitedEl2 = new Element2();

visitedEl1.accept(visitor);
visitedEl2.accept(visitor);

visitor = new Visitor2Impl();
visitedEl1.accept(visitor);
visitedEl2.accept(visitor);
