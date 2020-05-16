const Queue = require('./queue') 

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) { // If any of it r returning a method
        if (sourceOne.peek()) { // If still there is an ele inside there
            q.add(sourceOne.remove); // Take ele of source one and add to the queue
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove);
        }
    }

    return q;
}

module.exports weave;
