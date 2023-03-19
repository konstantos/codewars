function duplicateEncode(word) {
    return word
      .toLowerCase()
      .split("")
      .map(function(v, i, arr) {
        return arr.indexOf(v) == arr.lastIndexOf(v) ? "(" : ")";
      })
      .join("");
  }