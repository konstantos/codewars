//TODO Задача: Проверить на четность/нечетность числа
//? Теория: Проверим через остаток от деления. Если его не будет, то оно четное. Иначе просто выведим, что нет


//* Практика:
function evenOrOdd(number) {
    if (number % 2 == 0) { // Операция по проверке остатка от деления
        return "Even"; // Четное
    } else {
        return "Odd"; // Если нет, то выводим что нечетное
    }
}
//* Примечание: Можно код значительно сократить, сделав все в одну строку через стрелочную функцию, но я тут пишу для себя с разбором XD