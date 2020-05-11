{/*
Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
- Output: `1`

- Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
- Output: `0`

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
- Output: `-1`
*/}

const LinkedList = require('./linkedList');

let Bilboa = new LinkedList();
Bilboa.insertLast('B');
Bilboa.insertLast('i');
Bilboa.insertLast('l');
Bilboa.insertLast('b');
Bilboa.insertLast('o');
Bilboa.insertLast('a');

let Bilbo = new LinkedList();
Bilbo.insertLast('B');
Bilbo.insertLast('i');
Bilbo.insertLast('l');
Bilbo.insertLast('b');
Bilbo.insertLast('o');

let Bilbo2 = new LinkedList();
Bilbo2.insertLast('B');
Bilbo2.insertLast('i');
Bilbo2.insertLast('l');
Bilbo2.insertLast('b');
Bilbo2.insertLast('o');

let Bilbob = new LinkedList();
Bilbob.insertLast('B');
Bilbob.insertLast('i');
Bilbob.insertLast('l');
Bilbob.insertLast('b');
Bilbob.insertLast('o');
Bilbob.insertLast('b');

function compareLists(list1, list2) {
    let curr1 = list1.head;
    let curr2 = list2.head;
    while (curr1 && curr2) {
        if (curr1.value === curr2.value) {
            curr1 = curr1.next;
            curr2 = curr2.next;
            continue;
        } else if (curr1.value > curr2.value) {
            return 1;
        } else if (curr1.value < curr2.value) {
            return -1;
        }
    }
    if (curr1 && !curr2) {
        return 1;
    } else if (!curr1 && curr2) {
        return -1;
    }
    return 0;
}

console.log(compareLists(Bilboa, Bilbo));   // 1
console.log(compareLists(Bilbo, Bilbo2));   // 0
console.log(compareLists(Bilboa, Bilbob));  // -1