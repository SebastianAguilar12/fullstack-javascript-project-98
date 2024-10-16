import getUserName from '../src/cli.js';
import checkAnswer from './index.js';
import { getIntegerNumber } from './functions.js';

const userName = getUserName();

export default userName;

console.log(
  'Responde "yes" si el número es par, de lo contrario responde "no".',
);

for (let i = 1; i <= 3; i += 1) {
  const questionNumber = getIntegerNumber(1, 100);

  console.log(`Pregunta: ${questionNumber}`);

  const result = questionNumber % 2;

  let correctAnswer = 0;

  if (result === 0) {
    correctAnswer = 'yes';
    if (!checkAnswer(correctAnswer, userName)) {
      break;
    }
  }
  if (result !== 0) {
    correctAnswer = 'no';
    if (!checkAnswer(correctAnswer, userName)) {
      break;
    }
  }
  if (i === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}
