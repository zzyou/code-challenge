// address book
// data structure: hash table (name -> address, phone number, etc.)

// help center
// queue (first in first out)
// priority queue

let data1 = {value: "need help debugging tic tac toe", urgency: 1};
let data2 = {value: "getting started on algorithms", urgency: 9};
let data3 = {value: "data structure", urgency: 4};
let data4 = {value: "debugging boggle", urgency: 1};
let data5 = {value: "debugging yahtzee", urgency: 1};

// stocking a shelf/ customers taking things off of a shelf
// stack (first in last out)

// family tree
// tree?

// flow chart/ decision based on previous decision
// tree

// lexicon, trie

let lexicon = {
    value: 'a', 
    children: [
        {value: 'n', 
        children:
            [{value: 'd', children: []}]
        },
        {value: 't', children: []}
    ]
};

//at, an, and


// binary search tree
// all values to the left of a given node are smaller than root, all values to the right are larger.

// constructor function, so when creating a new object, use new keyword.
// enables prototype (with this keyword), comparing to regular function.
function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null
}

// // similar to regular function, which return an object, 
// // so you don't need new keyword:
// function TreeNode(value) {
//     return {
//         value: value,
//         left: null,
//         right: null
//     };
// }

// runtime complexity: O(n Log(n)):
function convertListToBinarySearchTree(arr) {
    // arr.forEach(num => new TreeNode(num));
    var head = new TreeNode(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        // if smaller than head, go left; if larger, go right
        var current = head;
        while (true) {
            if (arr[i] < current.value) {
                if (!current.left) {
                    current.left = new TreeNode(arr[i]);
                    break;
                }
                else {
                    current = current.left;
                }
            } 
            else {
                if (!current.right) {
                    current.right = new TreeNode(arr[i]);
                    break;
                }
                else {
                    current = current.right;
                }              
            }
        }      
    }
    return head;
}

var bst = convertListToBinarySearchTree([5, 7, 2, 4, 8, 3]);


// use recursion to search in binary search tree:
// runtime complexity: O(log(n)) if roughly balanced.
function isInBST(bst, value) {
    // base case
    if (bst === null) {
        return false;
    }
    // recursive case
    if (value === bst.value) {
        return true;
    }
    else if (value < bst.value) {
        // go left
        return isInBST(bst.left, value);
    } else {
        return isInBST(bst.right, value); 
    }
}

// not using recursion.
// same runtime as recursion, O(log(n)).
function notRecursiveIsInBST(bst, value) {
    var current = bst;
    while (current) {
        if (value === current.value) {
            return true;
        }
        else if (value < current.value) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return false;
}

console.log(isInBST(bst, 6));
console.log(notRecursiveIsInBST(bst, 6));



// linked list: trees whose nodes only have only one child.
// you can use linked list to construct queue.
// linked list is a type of queue. pop will be O(1).
// you can also implement linked list as array. pop will be O(n).

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
    // this.prev = null; // needed for doubly-linked list, but not singly linked
}

function LinkedList(head, last) {
    this.head = head;
    this.last = last;
}

// because linked list is a queue, so pop() is popping from the front.
// pop is dequeue.
LinkedList.prototype.pop = function() {
    var result = this.head.value;
    this.head = this.head.next;
    return result;
}

// runtime complexity: O(1)
LinkedList.prototype.push = function(value) {
    this.last.next = new LinkedListNode(value);
    this.last = this.last.next;
}

function createLinkedListFromArray(arr) {
    var head = new LinkedListNode(arr[0]);
    var ll = new LinkedList(head, head);
    for (var i = 0; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    return ll;
    // var current = head;
    // for (var i = 0; i < arr.length; i++) {
    //     current.next = new LinkedListNode(arr[i]);
    //     current = current.next;
    // }
    // return head;
}

var ll = createLinkedListFromArray([3, 6, 2, 5, 7]);
console.log(ll);

console.log(ll.pop());
console.log(ll);


// when deciding which data structure to use, 
// consider memory storage as well as run time complexity.



