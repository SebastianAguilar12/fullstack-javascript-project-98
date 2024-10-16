#!/usr/bin/env node
import getUserName from '../src/cli.js';
import checkAnswer from './index.js';
import {
  getIntegerNumber,
  getRandomOperator,
  sumRandomArguments,
  restRandomArguments,
  multRandomArguments,
} from './functions.js';

const userName = getUserName();

console.log('¿Cuál es el resultado de la expresión?');

let resultCalc = 0;

const showRandomCalc = (firstNumberCalc, secondNumberCalc, calcOperator) => {
  switch (calcOperator) {
    case '+':
      resultCalc = sumRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
    case '-':
      resultCalc = restRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
    case '*':
      resultCalc = multRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
    default:
      return null;
  }
};

for (let i = 1; i <= 3; i += 1) {
  const firstNumberCalc = getIntegerNumber(1, 100);
  const randomOperator = getRandomOperator();
  const secondNumberCalc = getIntegerNumber(1, 100);
  const randomCalc = showRandomCalc(
    firstNumberCalc,
    secondNumberCalc,
    randomOperator,
  );
  console.log(
    `Pregunta: ${firstNumberCalc} ${randomOperator} ${secondNumberCalc}`,
  );
  if (!checkAnswer(randomCalc, userName)) {
    break;
  }
  if (i === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}
