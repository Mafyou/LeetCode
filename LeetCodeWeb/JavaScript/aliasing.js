function Car() {
    var i = 0;
    this.Increment = function() {
        i++;
    }
    this.GetIncrement = function() {
        return i;
    }
}

var merco = new Car();
merco.Increment();
console.log(merco.GetIncrement()); // 1
var twingo = merco;
twingo.Increment();
console.log("merco: " + merco.GetIncrement()); // 2
console.log("twingo: " + twingo.GetIncrement()); // 2