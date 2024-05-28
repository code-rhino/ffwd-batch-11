### Visual Representation of the Graph

Let's visualize the graph we used in the cycle detection code example:

```
    A
   / \
  B   C
 / \   \
D   E   F
   \   /
    E-F
```

### Detailed Step-by-Step Walkthrough with Visualization

1. **Initialize**
   - Call DFS for each node starting from an unvisited node.
   - Visited: {}

2. **DFS Call for Node A**
   - Node: A, Parent: null
   - Visited: {A: true}
   - Neighbors of A: [B, C]

3. **DFS Call for Neighbor B**
   - Node: B, Parent: A
   - Visited: {A: true, B: true}
   - Neighbors of B: [A, D, E]

4. **DFS Call for Neighbor D**
   - Node: D, Parent: B
   - Visited: {A: true, B: true, D: true}
   - Neighbors of D: [B]
   - Check if neighbor B is visited and not the parent: No
   - Return false to continue

5. **DFS Call for Neighbor E**
   - Node: E, Parent: B
   - Visited: {A: true, B: true, D: true, E: true}
   - Neighbors of E: [B, F]
   - Check if neighbor B is visited and not the parent: No
   - Call DFS for neighbor F

6. **DFS Call for Neighbor F**
   - Node: F, Parent: E
   - Visited: {A: true, B: true, D: true, E: true, F: true}
   - Neighbors of F: [C, E]
   - Check if neighbor C is visited and not the parent: No
   - Check if neighbor E is visited and not the parent: Yes (Cycle detected)
   - Return true to indicate a cycle

7. **Cycle Detected**
   - The cycle is detected through node E back to node F.

### Final Output

The graph contains a cycle: `true`

### Code Implementation

Below is the complete code implementing the above steps:

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

// Demonstrate cycle detection in the graph
const containsCycle = hasCycle(graph);

console.log('Does the graph contain a cycle?', containsCycle);
```

### Running the Demo

To run the demo:

1. Open a terminal and navigate to the directory where `cycle_detection_demo.js` is saved.
2. Run the following command:

```sh
node cycle_detection_demo.js
```

### In-Class Explanation

1. **Define the Graph**:
   - Explain how the graph is represented using an adjacency list.
   - Show the connections between nodes visually (use a whiteboard or slide).

2. **Implement DFS for Cycle Detection**:
   - Walk through the `dfsCycle` function, explaining each step:
     - Starting at the initial node.
     - Marking the node as visited.
     - Recursively visiting neighbors.
     - Checking if a neighbor is visited and not the parent to detect a cycle.

3. **Demonstrate the Function**:
   - Run the code to check if the graph contains a cycle.
   - Show the output in the terminal and explain the result.

4. **Interactive Session**:
   - Ask students to modify the graph to create different scenarios, such as adding or removing edges, and observe the results.
   - Discuss how the algorithm handles different graph structures, including graphs without cycles.

This detailed walkthrough and demo will help students understand how DFS can be used to detect cycles in an undirected graph and how the algorithm works step-by-step.