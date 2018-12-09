//console.log("toto");
var myArray=[4,2,5,7,3,10,33,44,77,88,26];

var answer = [myArray.length];

var evenArray = [];
var oddArray = [];

for(let i=0 ; i< myArray.length; i++) {
    let current = myArray[i];
    if(current % 2 == 0) {
        evenArray.push(current);
    } else {
        oddArray.push(current);
    }
}

for (let i = 0; i < answer.length; i++) {
    if (evenArray.length > 0) {
        answer.push(evenArray.shift());
        if (oddArray.length > 0) {
            answer.push(oddArray.shift());
            i++;
        } else {
            while(evenArray.length > 0) {
                answer.push(evenArray.shift());
            }
        }
    } else {
        while ( oddArray.length > 0) {
            answer.push(oddArray(shift()));
        }
    }
}

answer.forEach(function(item) {
    console.log(item);
});