"use strict";
function compareAndLog(value1, value2) {
    console.log(`value1: ${value1}, value2: ${value2}`);
    console.log(`Are they equal? ${value1 === value2 ? 'Yes' : 'No'}`);
}
let stringValue = "2";
let numberValue = 2;
compareAndLog(stringValue, numberValue);
