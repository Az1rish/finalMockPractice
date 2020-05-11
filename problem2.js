const LinkedList = require('./linkedList');

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(2);
list.insertLast(4);
list.insertLast(5);
list.insertLast(7);
list.insertLast(7);
list.insertLast(7);
list.insertLast(9);
list.insertLast(11);
list.insertLast(13);

function display(list) {
    let curr = list.head;
    while (curr) {
        console.log(curr.value);
        curr = curr.next;
    }
}

// display(list);

// Now that I've created a linked list that's sorted and has duplicates create a function that removes duplicates

function duplicateRemover(list) {
    let curr = list.head;
    while (curr.next) {
        if (curr.value === curr.next.value) {
            list.remove(curr.value);
        }
        curr = curr.next;
    }
    return list;
}

display(duplicateRemover(list));