//TODO Задача: Проверить количество вхождений определенного числа (search). Другими словами, сколько есть этих чисел во входящем массиве.
//? Теория: Сделаем проверку через метод filter(), который проверит сколько данных чисел во входящем массиве.
//? В методе сделаем ещё одну функцию, которая возвращает нам проверяемое число. length подсчитает их количество вместо счётчика.


//* Практика:
Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
}
//* Примечание: решение не совсем мое. Подсмотрел у другого человека.