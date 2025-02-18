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

squareTests.isNotANumber(squareOfNumber("4"), "Not a number.");
squareTests.isNotANumber(squareOfNumber(null), "Not a number.");
squareTests.isNotANumber(squareOfNumber(undefined), "Not a number.");
squareTests.isNotANumber(squareOfNumber(NaN), "Not a number.");

squareTests.isEqual(squareOfNumber(0), 0, "Square of 0 should return 0.");
squareTests.isEqual(squareOfNumber(Infinity), Infinity, "Square of infinity should return infinity.");
squareTests.isEqual(squareOfNumber(-Infinity), Infinity, "Square of -infinity should return infinity.");

/*
const inchesTests = test("Inches to mm function tests.");

inchesTests.isEqual(inchesToMM(4), 16, "Square of 4 should return 16.");
inchesTests.isEqual(inchesToMM(5.4), 29.16, "Square of 5.4 should return 29.16.");
inchesTests.isEqual(inchesToMM(-3), 9, "Square of -3 should return 9.");

inchesTests.isNotANumber(inchesToMM("4"), "Not a number.");
inchesTests.isNotANumber(inchesToMM(null), "Not a number.");
inchesTests.isNotANumber(inchesToMM(undefined), "Not a number.");
inchesTests.isNotANumber(inchesToMM(NaN), "Not a number.");

inchesTests.isEqual(inchesToMM(0), 0, "Square of 0 should return 0.");
inchesTests.isEqual(inchesToMM(Infinity), Infinity, "Square of infinity should return infinity.");
inchesTests.isEqual(inchesToMM(-Infinity), Infinity, "Square of -infinity should return infinity.");
*/

/*
const rootTests = test("Root of number function tests.");

rootTests.isEqual(rootOfNumber(4), 16, "Square of 4 should return 16.");
rootTests.isEqual(rootOfNumber(5.4), 29.16, "Square of 5.4 should return 29.16.");
rootTests.isEqual(rootOfNumber(-3), 9, "Square of -3 should return 9.");

rootTests.isNotANumber(rootOfNumber("4"), "Not a number.");
rootTests.isNotANumber(rootOfNumber(null), "Not a number.");
rootTests.isNotANumber(rootOfNumber(undefined), "Not a number.");
rootTests.isNotANumber(rootOfNumber(NaN), "Not a number.");

rootTests.isEqual(rootOfNumber(0), 0, "Square of 0 should return 0.");
rootTests.isEqual(rootOfNumber(Infinity), Infinity, "Square of infinity should return infinity.");
rootTests.isEqual(rootOfNumber(-Infinity), Infinity, "Square of -infinity should return infinity.");
*/

/*
const inchesTests = test("Cube of number function tests.");

inchesTests.isEqual(cubeOfNumber(4), 16, "Square of 4 should return 16.");
inchesTests.isEqual(cubeOfNumber(5.4), 29.16, "Square of 5.4 should return 29.16.");
inchesTests.isEqual(cubeOfNumber(-3), 9, "Square of -3 should return 9.");

inchesTests.isNotANumber(cubeOfNumber("4"), "Not a number.");
inchesTests.isNotANumber(cubeOfNumber(null), "Not a number.");
inchesTests.isNotANumber(cubeOfNumber(undefined), "Not a number.");
inchesTests.isNotANumber(cubeOfNumber(NaN), "Not a number.");

inchesTests.isEqual(cubeOfNumber(0), 0, "Square of 0 should return 0.");
inchesTests.isEqual(cubeOfNumber(Infinity), Infinity, "Square of infinity should return infinity.");
inchesTests.isEqual(cubeOfNumber(-Infinity), Infinity, "Square of -infinity should return infinity.");
*/

/*
const areaTests = test("Area of circle function tests.");

areaTests.isEqual(areaOfCircle(4), 16, "Square of 4 should return 16.");
areaTests.isEqual(areaOfCircle(5.4), 29.16, "Square of 5.4 should return 29.16.");
areaTests.isEqual(areaOfCircle(-3), 9, "Square of -3 should return 9.");

areaTests.isNotANumber(areaOfCircle("4"), "Not a number.");
areaTests.isNotANumber(areaOfCircle(null), "Not a number.");
areaTests.isNotANumber(areaOfCircle(undefined), "Not a number.");
areaTests.isNotANumber(areaOfCircle(NaN), "Not a number.");

areaTests.isEqual(areaOfCircle(0), 0, "Square of 0 should return 0.");
areaTests.isEqual(areaOfCircle(Infinity), Infinity, "Square of infinity should return infinity.");
areaTests.isEqual(areaOfCircle(-Infinity), Infinity, "Square of -infinity should return infinity.");
*/

/*
const greetingTests = test("Greeting function tests.");

greetingTests.isEqual(greeting(4), 16, "Square of 4 should return 16.");
greetingTests.isEqual(greeting(5.4), 29.16, "Square of 5.4 should return 29.16.");
greetingTests.isEqual(greeting(-3), 9, "Square of -3 should return 9.");

greetingTests.isEqual(greeting(0), 0, "Square of 0 should return 0.");
greetingTests.isEqual(greeting(Infinity), Infinity, "Square of infinity should return infinity.");
greetingTests.isEqual(greeting(-Infinity), Infinity, "Square of -infinity should return infinity.");
*/