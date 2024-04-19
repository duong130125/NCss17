"use strict";
class BooleanPrinter {
    constructor(value) {
        this.value = value;
    }
    printGreeting() {
        this.value.printMessage();
    }
}
class Greeting {
    printMessage() {
        console.log("Xin chào");
    }
}
class Farewell {
    printMessage() {
        console.log("Tạm biệt");
    }
}
let booleanVariable = true;
let printer;
if (booleanVariable) {
    printer = new BooleanPrinter(new Greeting());
}
else {
    printer = new BooleanPrinter(new Farewell());
}
printer.printGreeting();
