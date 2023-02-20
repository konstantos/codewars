//TODO Задача: https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
//? Теория: Сделаем через цикл for, оттуда будем пушить данные в наш массив.


/**
 *  Функция возвращает массив параметризованное значение с Fizz и Buzz.
 * @param {number} n число, означающее количество значений в массиве
 * @returns {Array} Массив, со всеми данными
 */
function fizzbuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 == 0) {
            arr.push("Fizz");
        } else if (i % 5 == 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    return arr;
}