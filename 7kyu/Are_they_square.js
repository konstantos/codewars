//TODO Задача: проверить, являются ли все элементы в массиве квадратными.
//? Теория: Сделаем через цикл проверок, заранее проверив массив на пустоту. Если массив прошел цикл проверок, выводим true.


/**
 *  Функция проверяет все числа массива на квадратность
 * @param {Array} arr Массив с числами
 * @returns {boolean} true или false. Может быть undefined
 */
let isSquare = function(arr){
    if (arr.length == 0) {
        return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.sqrt(arr[i]);
        if (Number.isInteger(arr[i]) == false) {
        return false
        }
    }
    return true
}