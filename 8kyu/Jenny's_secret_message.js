//TODO Задача: исправить код.


//* Что было:
/*
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
        return "Hello, my love!";
}
*/

//* Что стало:
const greet = name => name == "Johnny" ? "Hello, my love!" : `Hello, ${name}!`; //Да, я решил выпендриться


//* Вот как должно быть
function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}