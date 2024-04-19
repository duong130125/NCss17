function compareAndLog<T>(value1: T, value2: T): void {
    console.log(`value1: ${value1}, value2: ${value2}`);
    console.log(`Are they equal? ${value1 === value2 ? 'Yes' : 'No'}`);
}

let stringValue: string = "2";
let numberValue: number = 2;

compareAndLog(stringValue, numberValue);
