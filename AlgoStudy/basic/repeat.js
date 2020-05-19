function repeat(string, count) {
    const strings = [];
    while(strings.length < count) {
        strings.push(string);
    }
    return strings.join('');
}

//

'meow'.repeat(3);