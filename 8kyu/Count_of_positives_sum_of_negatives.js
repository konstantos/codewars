function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce(function(p, c, i, s){
        c <= 0 ? p[1] += c : p[0] += 1;
        return p;
    }, [0, 0]) : [];
}