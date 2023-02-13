//TODO Задача: Создать базу данных с приветствиями на разных языках, а также реализовать само приветствие.
//? Делаем через объект, который хранит строку по нужному ключу. После принимаем язык в качестве входного данного и выводим нужное приветствие по ключу из объекта.


/**
 * Функция выводит приветствие на нужном языке
 * @param {string} language нужный язык
 * @returns {string} приветствие
 */
function greet(language) {
	const LBase = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    return LBase[language] || LBase.english;
}