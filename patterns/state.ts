abstract class State {
    protected context: StateContext;
    constructor() {}

    setContext(context: StateContext) {
        this.context = context;
    }
    abstract printStatus();
    abstract moveForward();
}

class FirstState extends State {
    printStatus() {
        console.log("First state");
    }

    moveForward() {
        this.context.changeState(new SecondState());
    }
}

class SecondState extends State {
    printStatus() {
        console.log("Second state");
    }

    moveForward() {
        this.context.changeState(new ThirdState());
    }
}

class ThirdState extends State {
    printStatus() {
        console.log("Third state");
    }

    moveForward() {
        return;
    }
}

class StateContext {
    constructor(private currentState: State) {
        currentState.setContext(this);
    }

    changeState(state: State) {
        this.currentState = state;
        state.setContext(this);
    }

    printStatus() {
        this.currentState.printStatus();
    }

    printAndMove() {
        this.currentState.printStatus();
        this.currentState.moveForward();
    }
}

const context = new StateContext(new FirstState());

context.printStatus();
context.printAndMove();
context.printAndMove();
context.printAndMove();
context.printAndMove();
