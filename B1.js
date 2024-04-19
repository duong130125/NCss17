"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("hello");
let output2 = identity(123);
let output3 = identity(true);
console.log(output1);
console.log(output2);
console.log(output3);
