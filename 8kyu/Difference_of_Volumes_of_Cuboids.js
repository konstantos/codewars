//TODO Задача: получить разницу объемов прямоугольных параллелепипедов
//? Теория: перемножаем каждый из массивов с данными сторон параллелепипедов. После отнимает у первого значение объема второго.
//? Если у первого объем меньше второго, должно получиться отрицательное число. В этом случае делаем его положительным, как если бы отнимали у второго объем первого.


/**
 * Функция узнает разницу объемов параллелепипеда
 * @param {number} a стороны первого параллелепипеда
 * @param {number} b стороны второго параллелепипеда
 * @returns {number} разница объемов
 */
function findDifference(a, b) {
    let res = 0;
    a = a.reduce((n, rec) => n * rec)
    b = b.reduce((n, rec) => n * rec)
    res = a - b;
    if (res < 0) {
      return res * -1
    } else {
      return res;
    }
  }