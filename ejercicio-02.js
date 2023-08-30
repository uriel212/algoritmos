function removeDuplicates(arr) {
    const uniqueElements = [];
    
    arr.forEach(element => {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    });
    
    return uniqueElements;
}

// Test Case 1
const arr1 = [1, 3, 3, 3, 1, 5];
const output1 = removeDuplicates(arr1);
console.log("Test Case 1:", output1);  // Expected Output: [1, 3, 5]

// Test Case 2
const arr2 = [];
const output2 = removeDuplicates(arr2);
console.log("Test Case 2:", output2);  // Expected Output: []

// Test Case 3
const arr3 = [1, 1, 1, 1];
const output3 = removeDuplicates(arr3);
console.log("Test Case 3:", output3);  // Expected Output: [1]