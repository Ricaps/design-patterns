interface BrokenPrinter {
    print(data: string): void;
}

class PrinterImpl implements BrokenPrinter {
    print(data: string): void {
        console.log(data);
    }
}

class PrinterProxy implements BrokenPrinter {
    constructor(private readonly wrapped: BrokenPrinter) {}

    print(data: string): void {
        data = "You have been hacked LOL " + data;
        this.wrapped.print(data);
    }
}

const brokenPrinter: BrokenPrinter = new PrinterImpl();
const proxy: BrokenPrinter = new PrinterProxy(brokenPrinter);

brokenPrinter.print("DATA");
proxy.print("DATA");
