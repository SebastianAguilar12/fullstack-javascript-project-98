import { getIntegerNumber } from '../bin/functions.js';
import getUserName from '../src/cli.js';
import checkAnswer from '../bin/index.js';

const userName = getUserName();

console.log('¿Qué número falta en la progresión?');

const progressionLength = 10;

const makeProgression = (
  progressionNumbers,
  progressionKey,
  hiddenPosition,
  progressionArray,
) => {
  for (let i = 1; i <= progressionLength; i += 1) {
    progressionArray.push(progressionNumbers + progressionKey);
    progressionNumbers += progressionKey;
  }
  for (let j = 0; j < progressionLength; j += 1) {
    if (j !== hiddenPosition) {
      console.log(progressionArray[j]);
    } else {
      console.log("..");
    }
  }
  const result = progressionArray[hiddenPosition];
  return result;
};

for (let k = 1; k <= 3; k += 1) {
  let progressionNumbers = getIntegerNumber(1, 100);
  const progressionKey = getIntegerNumber(1, 5);
  const hiddenPosition = getIntegerNumber(0, progressionLength - 1);
  let progressionArray = [];
  const checkedProgression = makeProgression(
    progressionNumbers,
    progressionKey,
    hiddenPosition,
    progressionArray,
  );
  if (!checkAnswer(undefined, checkedProgression, userName)) {
    break;
  }
  if (k === 3) {
    console.log(`¡Felicidades ${userName}!`);
  }
}
