const findElementIndex = (arr, element) => {
    let index = -1;
    arr.forEach((value, i) => {
        if (value === element && index === -1) {
            index = i;
        }
    });
    return index;
}

// Test Case 1
const arr1 = [1, 2, 1, 3, 2, 4, 2, 3, 3, 1, 3, 3];
const element1 = 3;
const output1 = findElementIndex(arr1, element1);
console.log("Test Case 1:", output1);  // Expected Output: 3

// Test Case 2
const arr2 = [1, 2, 3, 4];
const element2 = 5;
const output2 = findElementIndex(arr2, element2);
console.log("Test Case 2:", output2);  // Expected Output: -1
