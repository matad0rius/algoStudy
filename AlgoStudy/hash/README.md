WHAT IS A HASH TABLE?
  Hash tables are used to store key-value pairs.
  They are like arrays, but the keys are not ordered.
  Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing        values!
  
To implement a hash table, we'll be using an array.
In order to look up values by key, we need a way to convert keys into valid array indices.
A function that performs this task is called a hash function.

Prime numbers? wut.
  The prime number in the hash is helpful in spreading out the keys more uniformly.
  It's also helpful if the array that you're putting values into has a prime length
  
Dealing with Collisions
  Even with a large array and a great hash function, collisions are inevitable. 
  There are many strategies for dealing with collisions, but we'll focus on two:
  
    Separate Chaining
      With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an             array or a linked list).
      This allows us to store multiple key-value pairs at the same index.
     
     Linear Probing
       With linear probing, when we find a collision, we search through the array to find the next empty slot.
       Unlike with separate chaining, this allows us to store a single key-value at each index.   
       
Set / Get
  set
    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate chaining
  get
    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If the key isn't found, returns undefined


BIG O of HASH TABLES
  Insert: O(1)
  Deletion: O(1)
  Access: O(1)
  
  
Recap

    Hash tables are collections of key-value pairs

    Hash tables can find values quickly given a key

    Hash tables can add new key-values quickly

    Hash tables store data in a large array, and work by hashing the keys

    A good hash should be fast, distribute keys uniformly, and be deterministic

    Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

    When in doubt, use a hash table!
