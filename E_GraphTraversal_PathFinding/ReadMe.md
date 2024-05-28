# DFS Find Path

* [Video](https://vimeo.com/951231693/6316d875ca?share=copy)

### Step-by-Step Guide to Implement Depth-First Search (DFS) to Find a Path in a Graph

This guide will walk you through the process of implementing Depth-First Search (DFS) to find a path between two nodes in a graph. We will use a simple graph represented as an adjacency list, and write a DFS algorithm to find a path from node 'A' to node 'I'.

### Graph Representation

First, let's define the graph using an adjacency list:
```javascript
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'G'],
    'F': ['C', 'H', 'I'],
    'G': ['E'],
    'H': ['F'],
    'I': ['F']
};
```

### DFS Path-Finding Function

We will implement a DFS function to find a path from the start node to the goal node:
```javascript
function dfsPath(graph, start, goal, path = [], visited = new Set()) {
    path.push(start);
    visited.add(start);

    if (start === goal) {
        return path;
    }

    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            let result = dfsPath(graph, neighbor, goal, path, visited);
            if (result) {
                return result;
            }
        }
    }

    path.pop();
    return null;
}
```

### Helper Function to Initiate DFS Path Finding

We create a helper function to start the DFS path-finding process:
```javascript
function findPath(graph, start, goal) {
    const path = dfsPath(graph, start, goal);
    return path ? path : `No path found from ${start} to ${goal}`;
}
```

### Demonstration

Let's demonstrate finding a path from 'A' to 'I':
```javascript
const startNode = 'A';
const goalNode = 'I';
const path = findPath(graph, startNode, goalNode);

console.log(`Path from ${startNode} to ${goalNode}:`, path);
```

### Visual Representation of the Graph

Below is the visual representation of the graph we used in the code example:
```
    A
   / \
  B   C
 / \   \
D   E   F
   /   / \
  G   H   I
```

### Detailed Step-by-Step Walkthrough

Here is a detailed step-by-step walkthrough of the DFS algorithm to find a path from 'A' to 'I':

1. **Initialize**
   - Stack: [A]
   - Visited: {}
   - Path: []

2. **First Iteration**
   - Pop from stack: A
   - Check if A is visited: No
   - Add A to visited: {A}
   - Add A to path: [A]
   - Check if A is goal (I): No
   - Get neighbors of A: [B, C]
   - Push neighbors to stack: [B, C]

3. **Second Iteration**
   - Pop from stack: C
   - Check if C is visited: No
   - Add C to visited: {A, C}
   - Add C to path: [A, C]
   - Check if C is goal (I): No
   - Get neighbors of C: [A, F]
   - Push neighbors to stack: [B, F]

4. **Third Iteration**
   - Pop from stack: F
   - Check if F is visited: No
   - Add F to visited: {A, C, F}
   - Add F to path: [A, C, F]
   - Check if F is goal (I): No
   - Get neighbors of F: [C, H, I]
   - Push neighbors to stack: [B, H, I]

5. **Fourth Iteration**
   - Pop from stack: I
   - Check if I is visited: No
   - Add I to visited: {A, C, F, I}
   - Add I to path: [A, C, F, I]
   - Check if I is goal (I): Yes
   - Goal found, return path: [A, C, F, I]

### Final Path Output

The path from 'A' to 'I' found by DFS is:
```
[A, C, F, I]
```

By following this guide, you should be able to implement DFS to find a path between two nodes in a graph. The detailed step-by-step walkthrough ensures you understand each stage of the algorithm and how the path is determined.

