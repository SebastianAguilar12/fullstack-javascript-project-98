import readLineSync from "readline-sync";
import getUserName from "../src/cli.js";

const userName = getUserName();

console.log(
  'Responde "yes" si el número es par, de lo contrario responde "no".',
);

const getIntegerNumber = (min, max) => {
  const intNumber = Math.floor(Math.random() * (max - min));
  return intNumber;
};

for (let i = 1; i <= 3; i++) {
  const questionNumber = getIntegerNumber(1, 100);

  console.log("Pregunta: " + questionNumber);

  const userAnswer = readLineSync.question("Tu respuesta: ");

  const result = questionNumber % 2; //se declara variable con el número aleatorio obtenido para evaluar su módulo entre 2.

  if (result === 0) {
    if (userAnswer === "yes") {
      console.log("¡Correcto!");
    } else {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era 'yes'\n¡Intentémoslo de nuevo, ${userName}!`,
      );
      break;
    }
  }
  if (result !== 0) {
    if (userAnswer === "no") {
      console.log("¡Correcto!");
    } else {
      console.log(
        `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era 'no'\n¡Intentémoslo de nuevo, ${userName}!`,
      );
      break;
    }
  }
  if (i === 3) {
    console.log(`¡Felicidades, ${userName}!`);
  }
}
