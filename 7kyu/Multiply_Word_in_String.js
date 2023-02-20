//TODO Задача: https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
//? Теория: Разбиваем строку на массив слов и находим нужное слово по индексу loc. Его мы умножаем методом repeat, удаляя первый элемент (это тире).


/**
 *  Функция возвращает строку со словом, умноженный на num количество раз.
 * @param {string} str
 * @param {number} loc
 * @param {number} num
 * @returns
 */
function modifyMultiply (str,loc,num) {
    str = str.split(" ");
    let res = `-${str[loc]}`;
    return res.repeat(num).substring(1);
}