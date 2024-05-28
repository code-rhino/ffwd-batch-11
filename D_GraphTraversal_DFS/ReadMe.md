# DFS

* [Video](https://vimeo.com/951223879/691fd5e051?share=copy)

## Step-by-Step Guide for Depth-First Search (DFS) Walkthrough

### Overview
In this guide, we will walk through the Depth-First Search (DFS) algorithm applied to a graph. The goal is to explore all the nodes in a graph starting from a given node, traversing as deep as possible before backtracking.

### Visual Representation of the Graph
Here's the graph we'll use for the example:

```
    A
   / \
  B   C
 / \   \
D   E   F
   /   / \
  G   H   I
```

### Step-by-Step Walkthrough

#### 1. Initialization
- **Stack**: [A]
- **Visited**: {}
- **Output**: []

#### 2. First Iteration
- **Pop from stack**: A
- **Check if A is visited**: No
- **Add A to visited**: {A}
- **Add A to output**: [A]
- **Get neighbors of A**: [B, C]
- **Push neighbors to stack**: [B, C]

#### 3. Second Iteration
- **Pop from stack**: C
- **Check if C is visited**: No
- **Add C to visited**: {A, C}
- **Add C to output**: [A, C]
- **Get neighbors of C**: [A, F]
- **Push neighbors to stack**: [B, F]

#### 4. Third Iteration
- **Pop from stack**: F
- **Check if F is visited**: No
- **Add F to visited**: {A, C, F}
- **Add F to output**: [A, C, F]
- **Get neighbors of F**: [C, H, I]
- **Push neighbors to stack**: [B, H, I]

#### 5. Fourth Iteration
- **Pop from stack**: I
- **Check if I is visited**: No
- **Add I to visited**: {A, C, F, I}
- **Add I to output**: [A, C, F, I]
- **Get neighbors of I**: [F]
- **No new neighbors to push**

#### 6. Fifth Iteration
- **Pop from stack**: H
- **Check if H is visited**: No
- **Add H to visited**: {A, C, F, I, H}
- **Add H to output**: [A, C, F, I, H]
- **Get neighbors of H**: [F]
- **No new neighbors to push**

#### 7. Sixth Iteration
- **Pop from stack**: B
- **Check if B is visited**: No
- **Add B to visited**: {A, C, F, I, H, B}
- **Add B to output**: [A, C, F, I, H, B]
- **Get neighbors of B**: [A, D, E]
- **Push neighbors to stack**: [D, E]

#### 8. Seventh Iteration
- **Pop from stack**: E
- **Check if E is visited**: No
- **Add E to visited**: {A, C, F, I, H, B, E}
- **Add E to output**: [A, C, F, I, H, B, E]
- **Get neighbors of E**: [B, G]
- **Push neighbors to stack**: [D, G]

#### 9. Eighth Iteration
- **Pop from stack**: G
- **Check if G is visited**: No
- **Add G to visited**: {A, C, F, I, H, B, E, G}
- **Add G to output**: [A, C, F, I, H, B, E, G]
- **Get neighbors of G**: [E]
- **No new neighbors to push**

#### 10. Ninth Iteration
- **Pop from stack**: D
- **Check if D is visited**: No
- **Add D to visited**: {A, C, F, I, H, B, E, G, D}
- **Add D to output**: [A, C, F, I, H, B, E, G, D]
- **Get neighbors of D**: [B]
- **No new neighbors to push**

#### 11. End
- **Stack is empty**
- **Return output**: [A, C, F, I, H, B, E, G, D]

### Final Code
Here's the final code used for the DFS traversal:

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

// Depth-First Search function
const dfs = (graph, start) => {
  let stack = [start];
  let visited = new Set();
  let output = [];

  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      output.push(node);

      let neighbors = graph[node];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return output;
};

// Perform DFS starting from node 'A'
const traversalOrder = dfs(graph, 'A');
console.log('DFS Traversal Order:', traversalOrder);
```

