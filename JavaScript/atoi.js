function atoi(chaine) {
    var i = 0;
    var n = chaine.length;
    var res = 0;
    neg = false;
    while (i < n) {
        var c = chaine.charAt(i);
        if (c === "-") neg = true;
        else res = res * 10 + parseInt(c);
        i++;
    }
    if (neg) {
        res = res * -1;
    }
    return res;
}
const int_max = 2147483647;
const int_min = -2147483648;
console.log(atoi("-123"));