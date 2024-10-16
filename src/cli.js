import readLineSync from 'readline-sync';

export default function getUserName() {
  console.log('¡Bienvenido a Brain Games!');

  const userName = readLineSync.question('¿Cuál es tu nombre? ');

  console.log(`¡Hola, ${userName}!`);

  return userName;
}
