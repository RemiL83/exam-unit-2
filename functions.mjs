export function squareOfNumber(number) {
    if (isNaN(number) || typeof number !== "number") {
        return NaN;
    }
    let square = number ** 2;
    return roundToTwoDecimals(square);
};

export function inchesToMM(inches) {
    if (isNaN(inches) || typeof inches !== "number" || inches < 0) {
        return NaN;
    }
    let MM = inches * 25.4;
    return roundToTwoDecimals(MM);
};

export function rootOfNumber(number) {
    if (number === Infinity) {
        return Infinity;
    }
    if (isNaN(number) || typeof number !== "number" || number < 0) {
        return NaN;
    }
    let average = (a, b) => (a + b)  / 2;
    let c = 5, b;
    for (let i = 0; i < 20; i++) {
        b = number / c;
        c = average(b, c);
    }
    return roundToTwoDecimals(c);
};

export function cubeOfNumber(number) {
    if (isNaN(number) || typeof number !== "number") {
        return NaN;
    }
    let cube = number ** 3;
    return roundToTwoDecimals(cube);
};

export function areaOfCircle(radius) {
    if (isNaN(radius) || typeof radius !== "number" || radius < 0) {
        return NaN;
    }
    const area = 3.14159 * (radius ** 2);
    return roundToTwoDecimals(area);
};

export function greeting(name) {
    if (typeof name !== 'string' || name === "") {
        return "Not a name.";
    }
    return "Hello, " + name + ". Welcome to the function.";
};

function roundToTwoDecimals(value) {
    if (value === Infinity || value === -Infinity) return value;

    let integer = value | 0;
    let decimal = value - integer;
    let shiftedDecimal = decimal * 100;
    let shiftedInteger = shiftedDecimal | 0;

    if (shiftedDecimal - shiftedInteger >= 0.5) {
        shiftedInteger += 1
    }
    let roundedValue = integer + (shiftedInteger / 100);
    return roundedValue;
};

