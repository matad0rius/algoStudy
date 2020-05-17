const dictionary = {the: 22038615, be: 12545825, and: 10741073, of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};

function getWordFrequency(dictionary, word) {
  return dictionary[word];
}

// O(1)

// Again, we can be sure that even if the dictionary has 10 or 1 million words, it would still execute line 4 once to find the word.
// However, if we decided to store the dictionary as an array rather than a hash map, then it would be a different story.