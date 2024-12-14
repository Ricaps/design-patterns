/**
 *
 * Decorator Pattern: Product Display
 * Apply the Decorator pattern to dynamically add features to product display such as adding badges for New Arrival, On Sale, and Best Seller.
 * Hint: The Decorator pattern enables the addition of responsibilities to objects dynamically.
 */
interface Printer {
    print(): void;
}

class BookPrinter implements Printer {
    print(): void {
        console.log("Books: \n");
    }
}

abstract class BookPrinterDecorator implements Printer {
    constructor(private readonly wrapped: Printer) {}

    print(): void {
        this.wrapped.print();
    }
}

class BestSellerPrinter extends BookPrinterDecorator {
    print(): void {
        super.print();
        console.log("Best sellers: Book A, Book B \n");
    }
}

class OnSalePrinter extends BookPrinterDecorator {
    print(): void {
        super.print();
        console.log("On Sale: Book C, Book D\n");
    }
}

let printer = new BookPrinter();
printer = new BestSellerPrinter(printer);
printer = new OnSalePrinter(printer);

printer.print();
