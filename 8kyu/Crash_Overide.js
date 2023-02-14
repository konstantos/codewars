//TODO Задача: Сделать хакерское имя по первой букве слова
//? Теория: Сначала поднимем первые буквы в верхний регистр. Позже проверим полученные данные.


//* Примечание: Решение не совсем мое. Мне помогли, хоть я и по правде так и не допер до того, как это делать XD
function aliasGen() {
    let fName = firstName[arguments[0][0].toUpperCase()]
    let sName = surname[arguments[1][0].toUpperCase()]
    return fName && sName ? `${fName} ${sName}` : `Your name must start with a letter from A - Z.`
}