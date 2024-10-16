import readLineSync from "readline-sync";

const checkAnswer = (correctAnswer, userName, userAnswer = readLineSync.question("Tu respuesta: ")) => {
  if (String(userAnswer) === String(correctAnswer)) {
    console.log("¡Correcto!");
  } else {
    console.log(
      `'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'\n¡Intentémoslo de nuevo, ${userName}!`,
    );
    return false;
  }
  return userAnswer;
}

export default checkAnswer;
