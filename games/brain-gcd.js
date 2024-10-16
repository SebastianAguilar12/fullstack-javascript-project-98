import { getIntegerNumber } from '../bin/functions.js';
import getUserName from '../src/cli.js';
import checkAnswer from '../bin/index.js';

const userName = getUserName();

console.log('Encuentra el máximo común divisor de los números dados.');

const getGreatCommonDivisor = (firstFactor, secondFactor) => {
  let modifiedFirstFactor = firstFactor;
  let modifiedSecondFactor = secondFactor;
  while (modifiedFirstFactor !== 0 && modifiedSecondFactor !== 0) {
    const tempValue = modifiedFirstFactor;
    if (modifiedFirstFactor !== 0 && modifiedSecondFactor !== 0) {
      modifiedFirstFactor = modifiedSecondFactor;
      modifiedSecondFactor = tempValue % modifiedSecondFactor;
    }
  }
  return modifiedFirstFactor || modifiedSecondFactor;
};

for (let i = 1; i <= 3; i += 1) {
  const randomNumber1 = getIntegerNumber(1, 100);
  const randomNumber2 = getIntegerNumber(1, 100);

  console.log(`El primer número es: ${randomNumber1}`);
  console.log(`El segundo número es: ${randomNumber2}`);

  const greatCommonDivisor = getGreatCommonDivisor(randomNumber1, randomNumber2);

  if (!checkAnswer(greatCommonDivisor, userName)) {
    break;
  }
  if (i === 3) {
    console.log(`¡Felicidades ${userName}!`);
  }
}
