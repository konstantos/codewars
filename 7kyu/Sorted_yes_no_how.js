//TODO Задача: https://www.codewars.com/kata/580a4734d6df748060000045
//? Теория: Обычные проверки каждого элемента на возрастание или убывание с циклом.

/**
 *  Функция выводит строку с информацией о отсортированном (или нет) массиве
 * @param {array} array
 * @returns {string}
 */
function isSortedAndHow(array) {
    for(let i = 0; i <= array.length-1; i++) {
        if (array[i] <= array[i+1]) {
        return 'yes, ascending';
        } else if (array[i] >= array[i+1] && array[i+1] >= array[i+2]) {
        return 'yes, descending';
        }
        else {
        return 'no';
        }
    }
}