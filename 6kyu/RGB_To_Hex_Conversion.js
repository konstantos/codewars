//TODO Задача: Сделать конвертер RGB в HEX.
//? Теория: В HEX из RGB всегда получается 6 символов для выявления нужного цвета. Отрицательных или слишком больших (больше 255) значений нет.
//? Также все буквы нужно делать в верхнем регистре. Сделаем это через перебор массива циклом, где идет ряд нужных проверок.



function rgb(r, g, b){
    let hex = [r, g, b]; // массив с цифрами десятеричной системы
    for (let i = 0; i < hex.length; i++) { // перебор массива
        if (hex[i] <= 0) {  // проверка на ноль или отрецательное число
        hex[i] = "00";  //! Всегда должно быть 6 цифр в конечном счётё. Значит, нужно добавить 2 ноля с одного такого элемента массива
        } else if (hex[i] > 255) { // проверка на слишком больше значение
        hex[i] = "FF";
        } else {
        hex[i] = hex[i].toString(16).toUpperCase(); // основная формула получения HEX'а. Переводим цифры в строку шестнадцатеричной системы, позже поднимая буквы в верхний регистр
        }
        if (hex[i].length == 1) { // последняя проверка на случай, если символ в результате получился всего 1. В таком случае нужно первым символом среди 2 поставить ноль
        hex[i] = "0" + hex[i]
        }
    }
    return hex.join(""); // Соединяем массив и получаем результат
}