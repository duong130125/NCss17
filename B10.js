"use strict";
function isConvertibleToNumber(value) {
    return !isNaN(Number(value));
}
function add(a, b) {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    return (Number(a) + Number(b));
}
function subtract(a, b) {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    return (Number(a) - Number(b));
}
function multiply(a, b) {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    return (Number(a) * Number(b));
}
function divide(a, b) {
    if (typeof a === 'string' && !isConvertibleToNumber(a)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    if (typeof b === 'string' && !isConvertibleToNumber(b)) {
        return "Đầu vào không hợp lệ: không thể chuyển thành số";
    }
    if (Number(b) === 0) {
        return "Đầu vào không hợp lệ: không thể chia cho số 0";
    }
    return (Number(a) / Number(b));
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
