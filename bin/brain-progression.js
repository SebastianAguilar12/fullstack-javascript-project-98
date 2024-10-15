import { getIntegerNumber } from "./functions.js";
import getUserName from "../src/cli.js";
import { checkAnswer } from "./index.js";

const userName = getUserName();

console.log('¿Qué número falta en la progresión?');

const progressionLength = 10;

const makeProgression = () => {
    let progressionNumbers = getIntegerNumber (1, 100);
    const progressionKey = getIntegerNumber (1, 5);
    const hidePosition = getIntegerNumber (0, progressionLength - 1);
    let progressionArray = [];
    for (let i = 1; i <= progressionLength; i++) {
        progressionArray.push(progressionNumbers + progressionKey);
        progressionNumbers += progressionKey;
    }
    for (let j = 0; j < progressionLength; j++) {
        if (j !== hidePosition) {
            console.log(progressionArray[j]);
        } else {
        console.log('..');
        };
    };
    const result = progressionArray[hidePosition];
    return result;
};

for (let k = 1; k <= 3; k++) {
    const checkedProgression = makeProgression();
    if (!checkAnswer(undefined, checkedProgression, userName)) {
        break;
    };
    if (k === 3) {
        console.log(`¡Felicidades ${userName}!`);
    };
};
