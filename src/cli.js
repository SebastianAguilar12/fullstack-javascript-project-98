import readLineSync from "readline-sync";

export default function getUserName() {
  console.log("Welcome to Brain Games!");

  let userName = readLineSync.question("May I have your name? ");

  console.log(`Hi ${userName}!`);
}