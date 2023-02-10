//TODO Задача: Все буквы с четным индексом сделать с верхним регистром, все буквы с нечетным индексмо с нижним регистром.
//! Важно: Счёт индекса начинается с начала каждого слова. Не может быть такого, чтобы первая буква в слове начиналась с нечетного индекса.
//? Теория: Разобьем слова на подмассивы. Сделаем 2 цикла. 1-ый перебирает слова, 2-ой перебирает буквы. Во втором цикле идет счётчик индекса и проверка на четность.
//? В первом же мы разбираем и собираем слова. В конце мы соберем все слова и выведем полученный результат.


//* Практика:
function toWeirdCase(str) {
    let arr = str.split(" "); // разбили строку на новый массив со словами
    let s = [];  // массив "компелятор".
    for (let i = 0; i < arr.length; i++) { // Считаем каждое слова
      s = arr[i].split("") // Отправляем слово в массив
      for (let j = 0; j < s.length; j++) {  //Считаем каждую букву
        s[j] = j == 0 || j % 2 == 0 ? s[j].toUpperCase() : s[j].toLowerCase(); // Проверяем каждую букву на четность индекса
      }
      arr[i] = s.join(""); // Заменяем слово в первом массиве словом из кампилятора
    }
    return arr.join(" "); // Выводим строку из собранных слов массива
  }

  //* Дополнение: попытка более замудренного решения. Позже попробую исправить.
    //   let res = str.split(" ").forEach(el => {
  //     el.split("").forEach((l, i) => {
  //       if (i == 0 || i % 2 == 0) {
  //       l = l.toUpperCase();

  //       } else {
  //         l = l.toLowerCase();
  //       }
  //     }).join("");
  //     console.log(el)
  //   }).join(" ")
  //   return res;