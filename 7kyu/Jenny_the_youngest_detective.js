function missingWord(nums, str) {
    let res = "";
    let string = str.split(" ").join("");
    nums.sort((a, b) => a - b);
    nums.forEach(function(x){
        if (string[x]) {
        res += string[x].toLowerCase();
        } else {
        res = "No mission today";
        }
    });
    return res;
}