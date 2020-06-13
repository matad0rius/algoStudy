WHAT ARE GRAPHS
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, 
together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs 
for a directed graph.

USES FOR GRAPHS
  Social Networks
  Location / Mapping
  Routing Algorithms
  Visual Hierarchy
  File System Optimizations
  EVERYWHERE!
  
Recommendations
  "People also watched"
  "You might also like..."
  "People you might know"
  "Frequently bought with"

ESSENTIAL GRAPH TERMS
  Vertex - a node
  Edge - connection between nodes
  Weighted/Unweighted - values assigned to distances between vertices
  Directed/Undirected - directions assigned to distanced between vertices
  
  
Matrix Adjacency                              
  Takes up more space (in sparse graphs)  
  Slower to iterate over all edges
  Faster to lookup specific edge

Adjacency List
  Can take up less space (in sparse graphs)
  Faster to iterate over all edges
  Can be slower to lookup specific edge
  
ADDING A VERTEX
  Write a method called addVertex, which accepts a name of a vertex
  It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
  
REMOVING A VERTEX
  The function should accept a vertex to remove
  The function should loop as long as there are any other vertices in the adjacency list for that vertex
  Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for       that vertex
  delete the key in the adjacency list for that vertex
  
GRAPH TRAVERSAL USES
  Peer to peer networking
  Web crawlers
  Finding "closest" matches/recommendations
  Shortest path problems
  GPS Navigation
  Solving mazes
  AI (shortest path to win the game)
  
DEPTH FIRST
    Explore as far as possible down one branch before "backtracking"

  DEPTH FIRST TRAVERSAL (RESURSIVE)
  The function should accept a starting node
  Create a list to store the end result, to be returned at the very end
  Create an object to store visited vertices
  Create a helper function which accepts a vertex
  The helper function should return early if the vertex is empty
  The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
  Loop over all of the values in the adjacencyList for that vertex
  If any of those values have not been visited, recursively invoke the helper function with that vertex
  Invoke the helper function with the starting vertex
  Return the result array

DEPTH FIRST TRAVERSAL (ITERATIVE)
  The function should accept a starting node
  Create a stack to help use keep track of vertices (use a list/array)
  Create a list to store the end result, to be returned at the very end
  Create an object to store visited vertices
  Add the starting vertex to the stack, and mark it visited
  While the stack has something in it:
  Pop the next vertex from the stack
  If that vertex hasn't been visited yet:
  ​Mark it as visited
  Add it to the result list
  Push all of its neighbors into the stack
  Return the result array
  

BREADTH FIRST
  Visit neighbors at current depth first!
  
BREADTH FIRST
  This function should accept a starting vertex
  Create a queue (you can use an array) and place the starting vertex in it
  Create an array to store the nodes visited
  Create an object to store nodes visited
  Mark the starting vertex as visited
  Loop as long as there is anything in the queue
  Remove the first vertex from the queue and push it into the array that stores nodes visited
  Loop over each vertex in the adjacency list for the vertex you are visiting.
  If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  Once you have finished looping, return the array of visited nodes
  
Dijkstra's
  Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
  Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
  For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from       the starting node.
  If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
  
Dijkstra's Pseudocode
  This function should accept a starting and ending vertex
  Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
  After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
  Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  Start looping as long as there is anything in the priority queue
  dequeue a vertex from the priority queue
  If that vertex is the same as the ending vertex - we are done!
  Otherwise loop through each value in the adjacency list at that vertex
  Calculate the distance to that vertex from the starting vertex
  if the distance is less than what is currently stored in our distances object
  update the distances object with new lower distance
  update the previous object to contain that vertex
  enqueue the vertex with the total distance from the start node
  
  
Recap
  Graphs are collections of vertices connected by edges
  Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
  Graphs can contain weights and directions as well as cycles
  Just like trees, graphs can be traversed using BFS and DFS
  Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*
