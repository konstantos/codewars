//TODO Задача: https://www.codewars.com/kata/56b97b776ffcea598a0006f2/solutions/javascript
//? Теория: лень писать, честно.


function bubblesortOnce(arr) {
    let Arr = arr.slice();
    for (let i = 0; i < Arr.length - 1; i++) {
        if (Arr[i] > Arr[i + 1]) {
        [Arr[i], Arr[i + 1]] = [Arr[i + 1], Arr[i]];
        }
    }
    return Arr;
}