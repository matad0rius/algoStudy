# algoStudy

Name	        Insert	    Access	Search	Delete	    Comments
Array	        O(n)	      O(1)	  O(n)	  O(n)	      Insertion to the end is O(1). 
HashMap	      O(1)	      O(1)	  O(1)	  O(1)	      Rehashing might affect insertion time. 
Map (BST)	    O(log(n))	  -	      O(log(n))O(log(n))	Implemented using Binary Search Tree
Set (HM)	    O(1)	      -	      O(1)	  O(1)	      Set using a HashMap implementation. 
Set (List)	  O(n)	      -	      O(n)	  O(n)	      Implemented using Binary Search Tree
Set (BST)	    O(log(n))	  -	      O(log(n))O(log(n))	Implemented using Binary Search Tree
LS (singly)	  O(n)	      -	      O(n)	  O(n)	      Adding/Removing to the start of the list is O(1). 
LS (doubly)	  O(n)	      -	      O(n)	  O(n)	      Adding/Deleting from the beginning/end is O(1). But, deleting/adding from the middle is O(n).
Stack (array)	O(1)	      -	      -	      O(1)	      Insert/delete is last-in, first-out (LIFO)
Queue (naïve)	O(1)	      -	      -	      O(n)        Remove (Array.shift) is O(n)
Queue (array	O(1)	      -	      -	      O(1)        Worst time insert is O(n). However amortized is O(1)
Queue (list)	O(1)	      -	      -	      O(1)	      Using Doubly Linked List with reference to the last element.

![Image description](https://octodex.github.com/images/yaktocat.png)
