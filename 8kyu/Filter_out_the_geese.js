//TODO Задача: вырезать слова "гуси" из массива.
//? Теория: Методом filter сделаем новый массив с проверкой. Проверкой будет метод includes на искомый элемент. Заносится слова будут, если они не совпадают со словами гусями из нашего массива.


/**
 *  Функция возвращает массив, вырезая нужные слова "гуси"
 * @param {Array} birds
 * @returns {Array} Массив без слов "гусей"
 */
function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(i => !geese.includes(i));
};