//TODO Задача: Получить n-ое кол-во верхних (тоесть крупнейших) элементов из массива.
//? Теория: отсортируем эти элементы по методу sort(), где и будем проверять величину этих элементов.
//? Помещать их нужно методом slice в "зад" списка. Если этот способ не работает, значит в массиве недостаточно элементов и выводим пустой.


//* Практика:
const largest = (n, xs) => n ? xs.sort((a, b) => a - b).slice(-n) : [];