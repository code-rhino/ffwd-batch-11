# DFS Detech Cycle

[video](https://vimeo.com/951255811/3237fa5715?share=copy)

### Step-by-Step Guide for Depth-First Search (DFS) Cycle Detection in Graphs

### Introduction

This guide will walk you through implementing a Depth-First Search (DFS) algorithm to detect cycles in an undirected graph. We will define a graph using an adjacency list and create a function to perform DFS, checking for cycles.

### Step-by-Step Breakdown

#### Step 1: Define the Graph

First, we define our graph using an adjacency list. An adjacency list represents a graph where each node points to a list of its neighbors.

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
```

#### Step 2: Implement DFS for Cycle Detection

Create a helper function `dfsCycle` to perform the DFS and check for cycles.

```javascript
// Helper function to perform DFS for cycle detection
function dfsCycle(graph, node, visited, parent) {
  visited[node] = true;

  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      if (dfsCycle(graph, neighbor, visited, node)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true;
    }
  }

  return false;
}
```

**Explanation**:
- Mark the current node as visited.
- For each neighbor of the current node:
  - If the neighbor hasn't been visited, recursively perform DFS.
  - If the neighbor has been visited and is not the parent, a cycle is detected.

#### Step 3: Create Function to Check for Cycles in the Graph

Create the `hasCycle` function to iterate through all nodes and use the `dfsCycle` helper function to detect cycles.

```javascript
// Function to check if the graph contains a cycle
function hasCycle(graph) {
  const visited = {};

  for (let node in graph) {
    if (!visited[node]) {
      if (dfsCycle(graph, node, visited, null)) {
        return true;
      }
    }
  }

  return false;
}
```

**Explanation**:
- Initialize an empty object `visited` to keep track of visited nodes.
- For each node in the graph:
  - If the node hasn't been visited, call `dfsCycle`.
  - If a cycle is detected, return `true`.
- If no cycles are detected after checking all nodes, return `false`.

#### Step 4: Demonstrate Cycle Detection in the Graph

Use the `hasCycle` function to check if the graph contains a cycle and print the result.

```javascript
// Demonstrate cycle detection in the graph
const containsCycle = hasCycle(graph);

console.log('Does the graph contain a cycle?', containsCycle);
```

### Example Walkthrough

Let's walk through the code with the provided graph:

```
    A
   / \
  B   C
 / \   \
D   E   F
   \   /
    E-F
```

1. **Initialize**:
   - Start with an empty `visited` object.
   - Call `dfsCycle` for each unvisited node.

2. **DFS Call for Node A**:
   - Node: A, Parent: null
   - Visited: {A: true}
   - Neighbors of A: [B, C]

3. **DFS Call for Neighbor B**:
   - Node: B, Parent: A
   - Visited: {A: true, B: true}
   - Neighbors of B: [A, D, E]

4. **DFS Call for Neighbor D**:
   - Node: D, Parent: B
   - Visited: {A: true, B: true, D: true}
   - Neighbors of D: [B]
   - Check if neighbor B is visited and not the parent: No
   - Return false to continue

5. **DFS Call for Neighbor E**:
   - Node: E, Parent: B
   - Visited: {A: true, B: true, D: true, E: true}
   - Neighbors of E: [B, F]
   - Check if neighbor B is visited and not the parent: No
   - Call DFS for neighbor F

6. **DFS Call for Neighbor F**:
   - Node: F, Parent: E
   - Visited: {A: true, B: true, D: true, E: true, F: true}
   - Neighbors of F: [C, E]
   - Check if neighbor C is visited and not the parent: No
   - Check if neighbor E is visited and not the parent: Yes (Cycle detected)
   - Return true to indicate a cycle

### Running the Demo

To run the demo:

1. Save the code in a file named `cycle_detection_demo.js`.
2. Open a terminal and navigate to the directory where `cycle_detection_demo.js` is saved.
3. Run the following command:

```sh
node cycle_detection_demo.js
```

### Conclusion

This step-by-step guide demonstrates how to use DFS to detect cycles in an undirected graph. By understanding the process and visualizing the graph, you can effectively implement cycle detection in your projects.