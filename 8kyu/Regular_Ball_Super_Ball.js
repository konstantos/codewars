//TODO Задача: если ballType имеет определенное значение, надо вывести его. Иначе выводим "regular"
//? Теория: сделаем через метод this, который выводит его итак имеющееся значение. Если его нет, то через оператор или(||) выводим "regular"


//* Практика:
let Ball = function(ballType) {
    this.ballType = ballType || "regular"
};