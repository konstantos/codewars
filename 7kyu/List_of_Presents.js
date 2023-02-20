//TODO Задача: https://www.codewars.com/kata/5a84d485742ba347b90006b7/solutions/javascript
//? Теория: лень писать


/**
 *  Функция возвращает максимальное количество покупок, которое можно совершить.
 * @param {number} maxBudget Максимальная сумма для покупок
 * @param {Array} gifts все товары, которые можно купить
 * @returns {number} сколько товаров можно купить
 */
function howManyGifts(maxBudget, gifts) {
    gifts = gifts.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (maxBudget >= sum) {
        sum += gifts[i];
        i++;
    }
    return i - 1;
}