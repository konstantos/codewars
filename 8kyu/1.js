//TODO Задача: исправить код

//* Кароче, просто копируйте это. Тут я добавил только let классу name в начале.
function Warrior(n){
    let name = n;
    this.name = function(n){
      if(n) name = n;
      return name;
    }
  }

  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }