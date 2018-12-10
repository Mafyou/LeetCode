/**
 * Definition for a binary tree node.*/
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
/* */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var circleRight = function(root, L, R) {
    if (root.right == null) {
        if (root.val >= L && root.val <= R) {
            return root.val;
        }
        return 0;
    }
    if (root.val >= L && root.val <= R) {
        return root.val + circleRight(root.right, L, R);
    }
    return circleRight(root.right, L, R);
}

var circleLeft = function(root, L, R) {
    if (root.left == null) {
        if (root.val >= L && root.val <= R)
            return root.val;
        return 0;
    }
     if (root.val >= L && root.val <= R)
        return root.val + circleLeft(root.left, L, R);
    return circleLeft(root.left, L, R);
 }

var rangeSumBST = function(root, L, R) {
    let res = root.val;
    res += circleLeft(root.left, L, R);
    res += circleRight(root.right, L, R);
    return res;
};

// 32
//rangeSumBST([10,5,15,3,7,null,18], 7, 15)
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(18);
console.log(rangeSumBST(root, 7, 15));
//23
console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10));