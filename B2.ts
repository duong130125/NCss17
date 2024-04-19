interface Swapable<T> {
    (arr: T[], index1: number, index2: number): T[];
}

const swapElements: Swapable<any> = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid index");
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
};

let myArray = [1, 2, 3, 4, 5];
let swappedArray = swapElements(myArray, 1, 3);
console.log(swappedArray); 


