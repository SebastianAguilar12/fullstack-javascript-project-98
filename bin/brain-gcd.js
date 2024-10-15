import { getIntegerNumber } from './functions.js';
import getUserName from '../src/cli.js';
import { checkAnswer } from './index.js';

const userName = getUserName();

console.log('Encuentra el máximo común divisor de los números dados.');

const getGreatCommonDivisor = (firstFactor, secondFactor) => {

    while (firstFactor !== 0 && secondFactor !== 0) {
        let tempValue = firstFactor;
        if (firstFactor !== 0 && secondFactor !== 0) {
            firstFactor = secondFactor;
            secondFactor = tempValue % secondFactor;
        }
    }
    return firstFactor || secondFactor;       
}

for (let i = 1; i <= 3; i++) {
    const randomNumber1 = getIntegerNumber(1, 100);
    const randomNumber2 = getIntegerNumber(1, 100);

    console.log(`El primer número es: ${randomNumber1}`);
    console.log(`El segundo número es: ${randomNumber2}`);

    const greatCommonDivisor = getGreatCommonDivisor(randomNumber1, randomNumber2);

    if (!checkAnswer(undefined, greatCommonDivisor, userName)) {
        break;
    }
    if (i === 3) {
        console.log(`¡Felicidades ${userName}!`);
    }
}