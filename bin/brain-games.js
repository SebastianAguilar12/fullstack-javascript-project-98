#!/usr/bin/env node

import readLineSync from 'readline-sync';

console.log('Welcome to Brain Games!');

let userName = readLineSync.question('May I have your name? ');

console.log(`Hi ${userName}!`);