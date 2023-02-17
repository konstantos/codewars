//TODO Задача: https://www.codewars.com/kata/5b715fd11db5ce5912000019
//? Теория: методом reduce будем делать проверки, важные по заданию.


//* Практика:
const cupAndBalls = (ball, pairs) => pairs.reduce((ball, [a, b]) => a == ball? b: b == ball? a: ball, ball);