//console.log("toto");
var myArray=[4,2,5,7,3,10,33,44,77,88,26];

var answer = [myArray.length];
var page = 0;

for (let i = 0; i < myArray.length; i ++) {
    var current = myArray[i];
    if (current % 2 == 0) {
        answer[page] = current;
        page += 2
    }
}
page = 1;
for (let i = 0; i < myArray.length; i ++) {
    var current = myArray[i];
    if (current % 2 == 1) {
        answer[page] = current;
        page += 2
    }
}

answer.forEach(function(item) {
    console.log(item);
});