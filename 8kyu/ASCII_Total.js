function uniTotal (str) {
    if (str === "") {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res = res + +str.charCodeAt(i);
    }
    return res;
}