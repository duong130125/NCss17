function performOperation<T extends number | string | boolean>(num1: T, num2: T): void {
    if (typeof num1 === "number" && typeof num2 === "number") {
        const num3: number = num1 + num2;
        console.log(`${num1} + ${num2} = ${num3}`);

        const num4: number = num1 - num2;
        console.log(`${num1} - ${num2} = ${num4}`);

        const num5: number = num1 * num2;
        console.log(`${num1} * ${num2} = ${num5}`);

        const num6: number = num1 / num2;
        console.log(`${num1} / ${num2} = ${num6}`);
    } else {
        console.log("Phép tính không hợp lệ với kiểu dữ liệu này.");
    }
}

let num1: number = 10;
let num2: number = 5;
let num3: number;

performOperation(num1, num2);

num1 = "10";
num2 = true;

performOperation(num1, num2);
