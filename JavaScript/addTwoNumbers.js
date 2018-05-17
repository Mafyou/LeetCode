/**
 * Definition for singly-linked list.*/
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 /**/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var suml1 = 0;
    var suml2 = 0;
    var percent = 1;
    while (!l1.next) {
        suml1 += l1.val * percent;
        percent *= 10;
        l1 = l1.next;
    }
    console.log(suml1);
    for(var i = 0, percent = 1; i < l2.length; i++, percent *= 10) {
        suml2 += l2[i] * percent;
    }
    var result = suml1 + suml2;
    result = result + "";
    result = result.split("").reverse().join("");
    var resultArray = [];
    for(var i = 0, percent = 1; i < result.length; i++, percent *= 10) {
        resultArray.push(parseInt(result[i]));
    }
    return resultArray;
};
var l1 = new ListNode(2)
l1.next = new ListNode(4);
l1.next = new ListNode(3);
console.log(l1);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));