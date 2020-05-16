// Given a LS and integer n return the ele n spaces from the last node in the list
// Do not call the size methos of the LS. Assume than n will always be less than the length of the list

function fromLast(list, n) {
    let slow = list.getFisrt();
    let fast = list.getFisrt();

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;