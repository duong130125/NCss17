"use strict";
function mergeObjects(obj1, obj2) {
    const merged = {};
    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            merged[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                merged[key] = mergeObjects(obj1[key], obj2[key]);
            }
            else {
                if (!(key in obj1)) {
                    merged[key] = obj2[key];
                }
            }
        }
    }
    return merged;
}
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
const obj2 = {
    b: {
        c: 4,
        d: {
            f: 5
        }
    },
    g: 6
};
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
