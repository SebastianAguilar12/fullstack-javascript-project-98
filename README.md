### Hexlet tests and linter status:
[![Actions Status](https://github.com/SebastianAguilar12/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SebastianAguilar12/fullstack-javascript-project-98/actions)
<a href=https://codeclimate.com/github/SebastianAguilar12/fullstack-javascript-project-98/maintainability><img src=https://api.codeclimate.com/v1/badges/c305b6706f06dbfc8c1e/maintainability /></a>

<h2>Juegos Mentales</h2>
<h4>Descripción:</h4>
<p>Este proyecto trata de una serie de juegos mentales en la que el usuario podrá escoger el juego con el que desea interactuar. En esta serie puede escoger entre los juegos:</p>
<ul>
 <li>Pares o impares (brain-even)</li>
 <li>Calculadora (brain-calc)</li>
 <li>Máximo común divisor (brain-gcd)</li>
 <li>Progresión aritmética (brain-progression)</li>
 <li>Números primos (brain-prime)</li>
</ul>
<p>Antes de escoger algún juego, al ejecutar el comando <strong>make brain-games</strong>, el usuario recibirá la bienvenida. Es ahí cuando podrá escoger el juego que desee, recordando siempre usar el comando <strong>make</strong> antes del nombre del juego (el nombre del juego corresponde al que está en paréntesis en la lista de arriba), por ejemplo, para ejecutar el juego <italic>Calculadora (brain-calc)</italic> se debe ejecutar de la siguiente manera <strong>make brain-calc</strong>.</p>

<p>La dinámica para la construcción de los juegos se describe a continuación:</p>
<p>Antes de iniciar a explicar cada juego, cabe aclarar que se crearon funciones que influyen en la dinámica de todos los juegos. Las funciones que se crearon fueron las siguientes:</p>
<ul>
 <li>getUserName(): Para pedirle al usuario que ingrese su nombre.</li>
 <li>getIntegerNumber(): Para obtener un número aleatorio en el rango especificado, en este caso se utiliza el rango (1,100) para todos los juegos.</li>
 <li>checkAnswer(): En esta función, se compara la respuesta que da el usuario, con la respuesta correcta, que se obtendrá dependiendo del código de cada juego.</li>
 <li>getRandomOperator(): Esta función se usa específicamente para el juego de la Calculadora (Brain-calc) y devuelve un operador aleatoriamente ente ['+', '-', '*'].</li>
 <li>sumRandomArguments(): Esta función está ligada a getRandomOperator(), ya que, si la función devuelve el operador '+', sumará 2 números que se han obtenido aleatoriamente con getIntegerNumber().</li>
 <li>restRandomArguments(): Esta función se comporta igual que sumRandomArguments(), solo que en lugar de devolver la suma de los números aleatorios, devuelve la diferencia.</li>
 <li>multRandomArguments(): Funciona igual que las dos funciones anteriores, sin embargo, esta función devuelve el producto de dos números aleatorios.</li>
</ul>
<p>Las anteirores, son las funciones que se importan a los archivos principales de los juegos para interactuar en el código.</p>
<dl>
 <dt>Brain-even:</dt>
 <dd>Para este juego de pares e impares, se creó un ciclo en el que se evalúa un número aleatorio, obtenido con la función getIntegerNumber(), checando si el módulo de ese número cuando se divide entre 2, es 0. En ese caso, el ususario deberá responder "yes", caso contrario, deberá responder "no". Cuando el usuario da una respuesta incorrecta, el juego termina.\nEjemplo de demostración: Link asciinema brain-even: https://asciinema.org/a/cooovKWwz0KhoD7mNOQS5oQPV</dd>
 <dt>Brain-calc:</dt>
 <dd>En este juego, se creó una función principal que interactúa con algunas de las mencionadas anteriormente (getRandomOperator(), sumRandomArguments(), restRandomArguments(), multRandomArguments()), ya que evalúa el argumento que devuelve la función getRandomOperator(), en caso de que sea '+', devuelve la suma de dos números aleatorios, en caso de que sea '-', devuelve la diferencia entre 2 números aleatorios, y, en caso de que sea '*', devuelve el producto de dos números aleatorios. Se mostrará en pantalla la operación (el primer número aleatorio, el operador y, el segundo número aleatorio) y el usuario deberá dar la respuesta a esa operación.\nAquí se muestra el funcionamiento del juego: Brain-calc-test asciinema file: https://asciinema.org/a/Nblv9jztfqAqpNVBnvRpKz7xL.</dd>
 <dt>Brain-gcd:</dt>
 <dd>Para el juego del máximo común divisor, se creó una función principal, cuyos parámetros son 2 números aleatorios, que posteriormente se obtendrán mediante getIntegerNumber(1, 100). En esta función principal getGreatCommonDivisor(firstFactor, secondFacator) se utiliza el algoritmo de Euclides para hallar el Máximo común divisor entre dos números. Básicamente, se van dividiendo los términos y, el primer factor pasa a ser el valor del segundo factor y, el segundo factor toma el valor del módulo de la división entre los factores iniciales. Este ciclo se repite hasta que uno de los términos sea cero y, en este caso, el MCD sería el valor diferente de 0.\nEl funcionamiento del juego se puede evidenciar aquí: Brain-gcd file.js test https://asciinema.org/a/mQWUUhC2MLL1oACnhZOQgO7j3.</dd>
 <dt>Brain-progression:</dt>
 <dd>El juego de la progresión atirmética consta de la función principal makeProgression(progressionNumbers, progressionKey, hiddenPosition, progressionArray), que básicamente está compuesta de dos ciclos "for". El primer ciclo crea un array en el que intervienen varias variables. Se escoge un número aleatorio, que es con el que se empezará la progresión, y este número aleatorio va tomando el valor de la suma entre su valor anterior y la clave de la progresión, que será también un número aleatorio. Luego de crear el array, el segundo ciclo "for", va mostrando, en línea recta horizontal (con el parámetro process.stdout.write()), cada elemento del mismo, sin embargo, tiene un condicional, hay un valor que indicará la posición que el usuario debe adivinar. Cuando el ciclo llegue a esa posición (que también será aleatoria) en lugar de mostrar el valo numérico, mostrará 2 puntos seguidos (".."). Al checar la respuesta del usuario con la función checkAnswer(), si el usuario da una respuesta incorrecta, el juego termina.\nEl juego se puede ver funcionando aquí: Brain-progression-test file Asciinema: https://asciinema.org/a/BowVo7Zbq1RAV6foOLYqXUzcu.</dd>
 <dt>Brain-prime:</dt>
 <dd>En este juego de los números primos, se creó una función isPrimeNumber(randomNumber) que recibe como parámetro un número aleatorio y, utiliza un ciclo do{}while(), que indica que el número va a ser dividido por los números de 1 en uno hasta llegar al 100. Este ciclo de la función, tiene un condicional, que le indica que, si el número por el que está siendo dividido es diferente de sí mismo, de uno y el módulo de la división entre el número evaluado y por el que está siendo dividido, es igual a 0, quiere decir que, el número evaluado es divisible por el número de la sucencia y no es primo, por lo que devolverá "false" la función. Si al completar el ciclo, no se cumple estrictamente la condición, quiere decir que el número es primo.\Aquí se evidencia el funcionamiento del juego: Brain-prime-test file asciinema: https://asciinema.org/a/FSe1eyThBed3xLRT4LxOJKklI</dd>
</dl>




