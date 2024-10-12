import getUserName from "../src/cli.js";
import { getIntegerNumber } from "./brain-even.js";
import { checkAnswer } from "./index.js";
import {
  getRandomOperator,
  sumRandomArguments,
  restRandomArguments,
  multRandomArguments,
} from "./functions.js";

const userName = getUserName();

console.log("¿Cuál es el resultado de la expresión?");

let resultCalc = 0;

const showRandomCalc = (firstNumberCalc, secondNumberCalc, calcOperator) => {
  switch (calcOperator) {
    case "+":
      resultCalc = sumRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
    case "-":
      resultCalc = restRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
    case "*":
      resultCalc = multRandomArguments(firstNumberCalc, secondNumberCalc);
      return resultCalc;
  }
};

for (let i = 1; i <= 3; i++) {
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
  if (!checkAnswer(undefined, randomCalc, userName)) {
    break;
  }
  if (i === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}
