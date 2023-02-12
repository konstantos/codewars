//TODO Задача: исправить функцию.


//* Что стало:
function correctTail(bod, tail){
    let sub = bod.substr(bod.length-(tail.length))
    if (sub == tail) {
        return true
    } else {
        return false
    }
}

//* Что было:
/*
function correctTail(bod, tail ;

    sub = body.substr(bodylength-(tail.length)

    if sub = tail) ;
        return true
    }
    else
        return false
*/
