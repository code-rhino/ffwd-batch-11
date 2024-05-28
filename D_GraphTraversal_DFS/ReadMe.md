## Step-by-Step Demonstration of DFS in Node.js

1. **Define the Graph**
   - Use an adjacency list to represent the graph.
2. **Implement DFS Function**
   - Use a stack to manage nodes to be processed.
   - Use a set to track visited nodes.
3. **Walkthrough Example**
   - Demonstrate the algorithm on a simple graph.

### Code Example

Create a file named `dfs_demo.js` and add the following code:

```javascript
// Define the graph using an adjacency list
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

// Depth-First Search function
function dfs(graph, start) {
  let stack = [start]; // Initialize the stack with the start node
  let visited = new Set(); // Set to keep track of visited nodes
  let output = []; // Array to store the traversal order

  while (stack.length > 0) {
    let node = stack.pop(); // Take the top node from the stack

    if (!visited.has(node)) {
      visited.add(node); // Mark the node as visited
      output.push(node); // Add the node to the output

      // Get the neighbors and add them to the stack
      let neighbors = graph[node];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor); // Add unvisited neighbors to the stack
        }
      }
    }
  }

  return output;
}

// Perform DFS starting from node 'A'
const traversalOrder = dfs(graph, 'A');
console.log('DFS Traversal Order:', traversalOrder);
```

### Explanation of the Code

1. **Graph Representation**
   - The graph is represented using an adjacency list, where each key is a node and its value is an array of its neighbors.
   ```javascript
   const graph = {
     'A': ['B', 'C'],
     'B': ['A', 'D', 'E'],
     'C': ['A', 'F'],
     'D': ['B'],
     'E': ['B', 'F'],
     'F': ['C', 'E']
   };
   ```

2. **DFS Implementation**
   - The `dfs` function takes the graph and the starting node as inputs.
   - A stack is used to keep track of the nodes to be processed.
   - A set is used to keep track of visited nodes to avoid processing a node more than once.
   - The algorithm processes nodes by popping from the stack, marking them as visited, and pushing their unvisited neighbors onto the stack.
   ```javascript
   function dfs(graph, start) {
     let stack = [start]; // Initialize the stack with the start node
     let visited = new Set(); // Set to keep track of visited nodes
     let output = []; // Array to store the traversal order

     while (stack.length > 0) {
       let node = stack.pop(); // Take the top node from the stack

       if (!visited.has(node)) {
         visited.add(node); // Mark the node as visited
         output.push(node); // Add the node to the output

         // Get the neighbors and add them to the stack
         let neighbors = graph[node];
         for (let neighbor of neighbors) {
           if (!visited.has(neighbor)) {
             stack.push(neighbor); // Add unvisited neighbors to the stack
           }
         }
       }
     }

     return output;
   }
   ```

3. **Executing the DFS**
   - Call the `dfs` function with the starting node 'A'.
   - Display the traversal order in the console.
   ```javascript
   const traversalOrder = dfs(graph, 'A');
   console.log('DFS Traversal Order:', traversalOrder);
   ```


 