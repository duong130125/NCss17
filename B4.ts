interface Printable {
    printMessage(): void;
}

class BooleanPrinter<T extends Printable> {
    constructor(private value: T) {}

    printGreeting(): void {
        this.value.printMessage();
    }
}

class Greeting implements Printable {
    printMessage(): void {
        console.log("Xin chào");
    }
}

class Farewell implements Printable {
    printMessage(): void {
        console.log("Tạm biệt");
    }
}

let booleanVariable: boolean = true;
let printer: BooleanPrinter<Greeting | Farewell>;

if (booleanVariable) {
    printer = new BooleanPrinter(new Greeting());
} else {
    printer = new BooleanPrinter(new Farewell());
}

printer.printGreeting();
