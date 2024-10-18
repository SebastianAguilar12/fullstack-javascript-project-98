import { getIntegerNumber } from '../bin/functions.js';
import getUserName from '../src/cli.js';
import checkAnswer from '../bin/index.js';

export default () => {
  const userName = getUserName();
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
  const isPrimeNumber = (randomNumber) => {
    let result = 0;
    let i = 1;
    do {
      result = randomNumber % i;
      if (i !== 1 && i !== randomNumber && result === 0) {
        return false;
      }
      i += 1;
    } while (i <= 100);
    return true;
  };

  for (let j = 1; j <= 3; j += 1) {
    const checkedNumber = getIntegerNumber(1, 100);
    const primeCheck = isPrimeNumber(checkedNumber);
    let correctAnswer = '';
    console.log(`Pregunta: ${checkedNumber}`);
    if (primeCheck) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (!checkAnswer(correctAnswer, userName)) {
      break;
    }
    if (j === 3) {
      console.log(`¡Felicidades, ${userName}!`);
    }
  }
  return true;
};
