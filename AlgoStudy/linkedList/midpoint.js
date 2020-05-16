// Return the midle node of a LS
// If the list has an even number of ele return the node at the end of the 1st half of the list
// Do not use a counter variable do not retrieve the size of the list and only iterate throw the list 1 time



function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;