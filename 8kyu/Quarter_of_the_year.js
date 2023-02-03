//TODO Задача: Получить квартал месяца. Месяц приходит числом.
//? Теория: В каждом квартале 4 месяца. 12 месяцев - 4 квартала. Получаем число 5, значит это месяц 2-ого квартала.
//? Проблема лишь в получении числа квартала, так как при делении на 4 не все числа получаются целыми (допустим 2 / 4 = 0.5)
//? Поискав решение данной проблемы, нашел метод Math.ceil(), позволяющий округлять число вверх (0.5 => 1). Им и воспользуюсь.


//* Практика:
const quarterOf = (month) => {
    return Math.ceil(month/3); // Выводим сразу же результат операции с округлением вверх.
}