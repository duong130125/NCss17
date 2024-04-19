function isConvertibleToNumber(value: any): boolean {
    return !isNaN(Number(value));
}

function add<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    return (Number(a) + Number(b)) as T;
}

function subtract<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    return (Number(a) - Number(b)) as T;
}

function multiply<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    return (Number(a) * Number(b)) as T;
}

function divide<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }

    if (Number(b) === 0) {
        return "Đầu vào không hợp lệ: không thể chia cho số 0";
    }

    return (Number(a) / Number(b)) as T;
}

console.log(add(5, 3)); 
console.log(subtract(5, 3)); 
console.log(multiply(5, 3)); 
console.log(divide(10, 2)); 
console.log(add("5", "3")); 
console.log(subtract("5", "3")); 
console.log(multiply("5", "3")); 
console.log(divide("10", "2")); 
console.log(add("5", "abc"));
console.log(subtract("5", "abc")); 
console.log(multiply("5", "abc")); 
console.log(divide("10", "0")); 
