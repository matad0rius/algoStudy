Time complexity (or running time) is the estimated time an algorithm takes to run. However, you do not measure time complexity in seconds, but as a function of the input.

The time complexity is not about timing how long the algorithm takes. Instead, how many operations are executed. The number of instructions executed by a program is affected by the size of the input and how their elements are arranged.

We can say for each algorithm have the following running times:

Sort an array of numbers.
Worst-case time complexity (e.g., input elements in reversed order)
Best-case time complexity (e.g., already sorted)
Average-case time complexity (e.g., elements in random order)
We usually care more about the worst-case time complexity

The Big O notation combines what we learned in the last two sections about worst-case time complexity and asymptotic analysis.
The letter O refers to the order of a function.
The Big O notation is used to classify algorithms by their worst running time


O(1)          --> Constant      --> Odd or Even
O(log n)      --> Logarithmic   --> Finding an ele on sorted arr with binary search
O(n)          --> Linear        --> Find max element in unsorted array
O(n log n)    --> Linearithmic  --> Sorting ele in arr with mergesort, quickSort
O(n^2)        --> Quadratic     --> Duplicate ele in arr, sort an arr bubbleSort
O(n^c)        --> Polynomial    --> 3 variables equation solver
O(2^n)        --> Exponential   --> Find all subsets, Fibonaci
O(n!)         --> Factorial     --> Find all permutations of a given set/string

O(1)          --> 1 return
O(log n)      --> ELSE
O(n)          --> 1 FOR LOOP
O(n log n)    --> linear O(n) + logarithmic log(n) --> Divide and conquer
O(n^2)        --> 2 FOR LOOP
O(n^3)        --> 3 or more FOR LOOP
O(2^n)        --> SEQUENCE
O(n!)         --> PERMUTATIONS