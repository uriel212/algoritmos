function generateRandomArray(length, minValue, maxValue) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        randomArray.push(randomNumber);
    }
    return randomArray;
}

function createPyramid(arr) {
    const pyramid = [arr];
    while (arr.length > 1) {
        const nextRow = [];
        for (let i = 0; i < arr.length - 1; i++) {
            nextRow.push(arr[i] + arr[i + 1]);
        }
        pyramid.push(nextRow);
        arr = nextRow;
    }
    return pyramid;
}

function displayPyramid(pyramid) {
    pyramid.forEach(row => {
        console.log(row.join(" "));
    });
}

const initialArray = generateRandomArray(10, 1, 100);
console.log("Array Inicial:", initialArray);

const pyramid = createPyramid(initialArray);
console.log("Resultado:");
displayPyramid(pyramid);