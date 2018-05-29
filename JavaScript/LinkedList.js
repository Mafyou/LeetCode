let Node = function(item, node) {
    this.Item = item;
    this.Node = node;
}

let firstNode = new Node();
firstNode.Item = "be";

let secondNode = new Node();
secondNode.Item = "or";

firstNode.Node = secondNode;

let current = firstNode;
while(current != null) {
    console.log(current.Item);
    current = current.Node;
}