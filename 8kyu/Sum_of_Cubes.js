//TODO Задача: Напишите функцию, которая принимает целое положительное число n, суммирует все значения в кубе от 1 до n (включительно) и возвращает эту сумму.
//? Теория: Сделаем самовызывающую функцию, которая делает сумму всех кубических выражений.


/**
 * Функция делает сумму всех кубических выражений
 * @param {number} n число всех кубических значений
 * @returns {number} сумма чисел кубических выражений.
 */
function sumCubes(n){
    if (n == 1) {
        return n**3;
    } else {
        return n**3 + sumCubes(n - 1);
    }
}