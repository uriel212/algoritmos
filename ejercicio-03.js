function isValidNumber(input) {
    if (input === "") {
        return false;  // Cadena vacía no es válida
    }

    let hasDecimalPoint = false;
    let hasMinusSign = false;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === "-") {
            if (i !== 0 || hasMinusSign) {
                return false;  // El signo menos solo es válido al principio y máximo uno
            }
            hasMinusSign = true;
        } else if (char === ".") {
            if (hasDecimalPoint) {
                return false;  // Solo puede haber un punto decimal
            }
            hasDecimalPoint = true;
        } else if (isNaN(parseInt(char))) {
            return false;  // Caracter no numérico
        }
    }

    return true;
}

// Ejemplos
const examples = ["34", "43.45", "-42", "3a4", "43.4.5", "4-2-"];

examples.forEach(example => {
    if (isValidNumber(example)) {
        console.log(`${example} es un número válido.`);
    } else {
        console.log(`${example} no es un número válido.`);
    }
});
