What is recursion?
A process (a function in our case) that calls itself

It's EVERYWHERE!
  JSON.parse / JSON.stringify
  document.getElementById and DOM traversal algorithms
  Object traversal
  Very common with more complex algorithms
  It's sometimes a cleaner alternative to iteration
  
How recursive functions work
  Invoke the same function with a different input until you reach your      base case!
  
Base Case
  The condition when the recursion ends. 

Where things go wrong
  1- No base case
  2- Forget to return or return the wrong thing
  3- Stack overflow (not stopping)
  
Pure Recursion Tips
  For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
  Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
  To make copies of objects use Object.assign, or the spread operator
  
What about big O?
  Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input
  Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.
  
  
  
Recap
  A recursive function is a function that invokes itself
  Your recursive functions should always have a base case and be invoked with different input each time
  When using recursion, it's often essential to return values from one function to another to extract data from each function call
  Helper method recursion is an alternative that allows us to use an external scope in our recursive functions
  Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first
