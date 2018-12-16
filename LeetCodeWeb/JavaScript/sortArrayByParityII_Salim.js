//console.log("toto");
var myArray=[4,2,5,7,3,10,666,33,44,77,88,26];

var answer = [];

var evenArray = [];
var oddArray = [];

for(let i=0 ; i< myArray.length; i++) {
    let current = myArray[i];
    if(current % 2 === 0) {
        evenArray.push(current);
    } else {
        oddArray.push(current);
    }
}

for (let i = 0; i < myArray.length; i++) {
    if (evenArray.length > 0) {
        answer.push(evenArray.shift());
        if (oddArray.length > 0) {
            answer.push(oddArray.shift());
            i++;
        } else {
            while(evenArray.length > 0) {
                answer.push(evenArray.shift());
            }
            break;
        }
    } else {
        while ( oddArray.length > 0) {
            answer.push(oddArray(shift()));
        }
        break;
    }
}

answer.forEach(function(item) {
    console.log(item);
});