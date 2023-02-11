//TODO Задача: узнать, доедет ли машина до ближайшей заправки. Расчёт с миллями, затратами галлонов на милли и самими галлонами
//? Теория: Если расстояние, которое может проехать машина (топливо + рассход 1 галлона топлива на милли) превышает или равняется нужному расстоянию до заправки, значит машина доедет, иначе нет


/**
 * Функция, позволяющая узнать, доедет ли машина до ближайшей заправки
 * @param {number} dtp Дистанция до заправки
 * @param {number} mpg расстояние, пройденное с затратой 1 галлона топлива
 * @param {number} f   Сколько всего галлонов топлива
 * @returns {Boolean} true и false
 */
const zeroFuel = (dtp, mpg, f) => f * mpg - dtp >= 0 ? true : false;