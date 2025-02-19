import {squareOfNumber, inchesToMM, rootOfNumber, cubeOfNumber, areaOfCircle, greeting} from "./functions.mjs";

function test(description) {

    console.log(description);

    return {
        isEqual,
        isNotANumber,
        dosNotThrowError
    }
}

function dosNotThrowError(testFunction, description) {

    try {
        testFunction();
        console.log(`🟢 ${description}`);
    } catch (error) {
        console.log(error);
        console.log(`🔴 ${description}`)
    }
}

function isNotANumber(received, description) {
    if (isNaN(received)) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. received ${received}`);
    }
}

function isEqual(recived, expected, description) {

    if (recived === expected) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${recived}`);
    }

}

const squareTests = test("Square of number function tests.");

squareTests.isEqual(squareOfNumber(4), 16, "Square of 4 should return 16.");
squareTests.isEqual(squareOfNumber(5.4), 29.16, "Square of 5.4 should return 29.16.");
squareTests.isEqual(squareOfNumber(-3), 9, "Square of -3 should return 9.");

squareTests.isNotANumber(squareOfNumber("4"), `"4" is a string. No strings allowed.`);
squareTests.isNotANumber(squareOfNumber(null), `"null" is not a number.`);
squareTests.isNotANumber(squareOfNumber(undefined), `"undefined" is not a number.`);
squareTests.isNotANumber(squareOfNumber(NaN), "Not a number.");

squareTests.isEqual(squareOfNumber(0), 0, "Square of 0 should return 0.");
squareTests.isEqual(squareOfNumber(Infinity), Infinity, "Square of infinity should return infinity.");
squareTests.isEqual(squareOfNumber(-Infinity), Infinity, "Square of -infinity should return infinity.");

const inchesTests = test("Inches to mm function tests.");

inchesTests.isEqual(inchesToMM(1), 25.4, "1 inch should convert to 25.4 mm.");
inchesTests.isEqual(inchesToMM(5.4), 137.16, "5.4 inches should convert to 137.16 mm.");

inchesTests.isNotANumber(inchesToMM("4"), `"4" is a string. No strings allowed.`);
inchesTests.isNotANumber(inchesToMM(null), `"null" is not a number.`);
inchesTests.isNotANumber(inchesToMM(undefined), `"undefined" is not a number.`);
inchesTests.isNotANumber(inchesToMM(NaN), "Not a number.");
inchesTests.isNotANumber(inchesToMM(-3), "Can't have negative length.");
inchesTests.isNotANumber(inchesToMM(-Infinity), "Can't have negative infinite lengths.");

inchesTests.isEqual(inchesToMM(0), 0, "0 inches should convert to 0 mm.");
inchesTests.isEqual(inchesToMM(Infinity), Infinity, "Infinite inches should convert to infinity.");

const rootTests = test("Root of number function tests.");

rootTests.isEqual(rootOfNumber(16), 4, "Root of 16 should return 4.");
rootTests.isEqual(rootOfNumber(29.16), 5.4, "Root of 29.16 should return 5.4.");

rootTests.isNotANumber(rootOfNumber("4"), `"4" is a string. No strings allowed.`);
rootTests.isNotANumber(rootOfNumber(null), `"null" is not a number.`);
rootTests.isNotANumber(rootOfNumber(undefined), `"undefined" is not a number.`);
rootTests.isNotANumber(rootOfNumber(NaN), "Not a number.");
rootTests.isNotANumber(rootOfNumber(-9), NaN, "Root of -9 should return NaN.");
rootTests.isNotANumber(rootOfNumber(-Infinity), NaN, "Root of -Infininty should return NaN.");

rootTests.isEqual(rootOfNumber(0), 0, "Root of 0 should return 0.");
rootTests.isEqual(rootOfNumber(Infinity), Infinity, "Root of infinity should return infinity.");

const cubeTests = test("Cube of number function tests.");

cubeTests.isEqual(cubeOfNumber(4), 64, "Cube of 4 should return 64.");
cubeTests.isEqual(cubeOfNumber(5.4), 157.46, "Cube of 5.4 should return 157.46.");
cubeTests.isEqual(cubeOfNumber(-3), -27, "Cube of -3 should return -27.");

cubeTests.isNotANumber(cubeOfNumber("4"), `"4" is a string. No strings allowed.`);
cubeTests.isNotANumber(cubeOfNumber(null), `"null" is not a number.`);
cubeTests.isNotANumber(cubeOfNumber(undefined), `"undefined" is not a number.`);
cubeTests.isNotANumber(cubeOfNumber(NaN), "Not a number.");

cubeTests.isEqual(cubeOfNumber(0), 0, "Cube of 0 should return 0.");
cubeTests.isEqual(cubeOfNumber(Infinity), Infinity, "Cube of infinity should return infinity.");
cubeTests.isEqual(cubeOfNumber(-Infinity), -Infinity, "Cube of -infinity should return infinity.");

const areaTests = test("Area of circle function tests.");

areaTests.isEqual(areaOfCircle(4), 50.27, "A radius of 4 should return an area of 50.27.");
areaTests.isEqual(areaOfCircle(9.63), 291.34, "A radius of 9.63 should return an area of 291.34.");

areaTests.isNotANumber(areaOfCircle("4"), `"4" is a string. No strings allowed.`);
areaTests.isNotANumber(areaOfCircle(null), `"null" is not a number.`);
areaTests.isNotANumber(areaOfCircle(undefined), `"undefined" is not a number.`);
areaTests.isNotANumber(areaOfCircle(NaN), "Not a number.");
areaTests.isNotANumber(areaOfCircle(-Infinity), "A radius of -infinity should return NaN");
areaTests.isNotANumber(areaOfCircle(-3), "A radius of -3 should return NaN");

areaTests.isEqual(areaOfCircle(0), 0, "A radius of 0 should return 0.");
areaTests.isEqual(areaOfCircle(Infinity), Infinity, "An infinite radius should return an infinite area.");

const greetingTests = test("Greeting function tests.");

greetingTests.isEqual(greeting(4), "Not a name.", "This is a number, not a name.");
greetingTests.isEqual(greeting("Henry"), "Hello, Henry. Welcome to the function.", `"Henry" should return the greeting.`);
greetingTests.isEqual(greeting(-3), "Not a name.", "This is a  negative number, not a name.");
greetingTests.isEqual(greeting(""), "Not a name.", "This is an empty string, not a name.");
greetingTests.isEqual(greeting(true), "Not a name.", "This is a boolean, not a name.");
greetingTests.isEqual(greeting(false), "Not a name.", "This is a boolean, not a name.");
greetingTests.isEqual(greeting(null), "Not a name.", "This is null, not a name.");
greetingTests.isEqual(greeting(undefined), "Not a name.", "This is undefined, not a name.");
greetingTests.isEqual(greeting(Infinity), "Not a name.", "This is infinity, not a name.");
greetingTests.isEqual(greeting(-Infinity), "Not a name.", "This is -infinity, not a name.");