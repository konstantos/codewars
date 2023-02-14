//TODO Задача: Создать программу, которая принимает значение , integer и возвращает список его кратных до другого значения
//? Теория: сделаем новый массив, который будет принимать в себя числа из цикла. В цикле мы будем узнавать, кратно ли это число на заданное изначально. Если да, то заносим.
Find Multiples of a Number

/**
 *  Функция возвращает массив со всеми числами, делящиеся на integer
 * @param {number} integer
 * @param {number} limit
 * @returns массив с числами
 */
function findMultiples(integer, limit) {
    let res = []; // Новый массив
    for (let i = 1; i <= limit; i++) { //! Начинать индекс надо с 1, ибо 0 делится на любое число, а оно нам не нужно
        if (i % integer == 0) { // Проверка на кратность
            res.push(i); // Заносим в массив
        }
    }
    return res; // Выводим массив со всеми числами
}