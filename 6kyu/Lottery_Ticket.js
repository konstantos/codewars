//TODO Задача: Проверить, выиграл ли человек по тикетам. Сравнить юникод букв с цифрой тикета. Если выигрышей мало, он проиграл
//? Теория: Сделаем счётчик выигрышей. После сделаем 2 цикла. В 1-ом перебираем билет, во 2-ом перебираем буквы и прибавляем мини-выйгрыши. Во втором цикле мы проверяем буквы на их юникод и сравниваем с
//? выйгрышным числом. Важно понимать, что мини-выйгрыш может быть один, поэтому 2-ой цикл на находке нужно прервать и перейти к следующей части билета. После выводим сравнение с количеством нужных мини-выйгрышей.


//* Практика:
function bingo(ticket, win) {
    let res = 0; // Счётчик мини-выйгрышей
    for (let i = 0; i < ticket.length; i++) { // Перебираем билет
        for (let j = 0; j < ticket[i][0].length; j++) { // Перебираем буквы в подмассивах.
            if (ticket[i][0].charCodeAt(j) == ticket[i][1]) { // Сравниваем юникод буквы с цифрой в подмассиве. Если одинаковое, то записываем результат и прерывам этот цикл.
                res++;
                break;  // Прерывание цикла
            }
        }
    }
    return res < win ? "Loser!" : "Winner!"; // Выводим результат.
}