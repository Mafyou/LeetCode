function iteration(number) {
    for (var i = 0; i < number; i++) {
        console.log(i);
    }
}

function recursion(number) {
    if (number === 0) return;
    console.log(number);
    recursion(number - 1);
}

console.log(iteration(10));
console.log(recursion(10));