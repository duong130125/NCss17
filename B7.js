"use strict";
function performOperation(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        const num3 = num1 + num2;
        console.log(`${num1} + ${num2} = ${num3}`);
        const num4 = num1 - num2;
        console.log(`${num1} - ${num2} = ${num4}`);
        const num5 = num1 * num2;
        console.log(`${num1} * ${num2} = ${num5}`);
        const num6 = num1 / num2;
        console.log(`${num1} / ${num2} = ${num6}`);
    }
    else {
        console.log("Phép tính không hợp lệ với kiểu dữ liệu này.");
    }
}
let num1 = 10;
let num2 = 5;
let num3;
performOperation(num1, num2);
num1 = "10";
num2 = true;
performOperation(num1, num2);
