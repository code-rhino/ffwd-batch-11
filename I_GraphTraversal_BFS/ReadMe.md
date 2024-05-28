# Breath first search 

* [Video](https://vimeo.com/951265735/a016071f79?share=copy)

### Step-by-Step Guide for Breadth-First Search (BFS) Traversal

This guide will walk you through the implementation and execution of the Breadth-First Search (BFS) algorithm using JavaScript. The BFS algorithm explores all neighbors of a node before moving on to their children, level by level.

#### 1. Understanding the Problem

We will perform a BFS traversal on the following graph:

```
    A
   / \
  B   C
 / \   \
D   E   F
   /   / \
  G   H   I
```

#### 2. Initialize the Graph

First, represent the graph using an adjacency list:

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

#### 3. Implement the BFS Algorithm

Now, let's write the BFS function. The algorithm will use a queue to keep track of nodes to be explored and a set to keep track of visited nodes:

```javascript
function bfs(graph, start) {
    let queue = [start]; // Initialize the queue with the start node
    let visited = new Set(); // Set to keep track of visited nodes
    let output = []; // Array to store the traversal order

    while (queue.length > 0) {
        let node = queue.shift(); // Take the first node from the queue

        if (!visited.has(node)) {
            visited.add(node); // Mark the node as visited
            output.push(node); // Add the node to the output

            // Get the neighbors and add them to the queue
            let neighbors = graph[node];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor); // Add unvisited neighbors to the queue
                }
            }
        }
    }

    return output;
}
```

#### 4. Execute the BFS Algorithm

Use the BFS function to traverse the graph starting from node 'A':

```javascript
const startNode = 'A';
const traversalOrder = bfs(graph, startNode);

console.log(`BFS Traversal Order starting from ${startNode}:`, traversalOrder);
```

#### 5. Detailed Step-by-Step Walkthrough

Let's go through the BFS traversal process in detail:

1. **Initialize**
   - Queue: [A]
   - Visited: {}
   - Output: []

2. **First Iteration**
   - Dequeue: A
   - Visited: {A}
   - Output: [A]
   - Neighbors: [B, C]
   - Enqueue: [B, C]

3. **Second Iteration**
   - Dequeue: B
   - Visited: {A, B}
   - Output: [A, B]
   - Neighbors: [A, D, E]
   - Enqueue: [C, D, E]

4. **Third Iteration**
   - Dequeue: C
   - Visited: {A, B, C}
   - Output: [A, B, C]
   - Neighbors: [A, F]
   - Enqueue: [D, E, F]

5. **Fourth Iteration**
   - Dequeue: D
   - Visited: {A, B, C, D}
   - Output: [A, B, C, D]
   - Neighbors: [B]
   - No new neighbors to enqueue

6. **Fifth Iteration**
   - Dequeue: E
   - Visited: {A, B, C, D, E}
   - Output: [A, B, C, D, E]
   - Neighbors: [B, G]
   - Enqueue: [F, G]

7. **Sixth Iteration**
   - Dequeue: F
   - Visited: {A, B, C, D, E, F}
   - Output: [A, B, C, D, E, F]
   - Neighbors: [C, H, I]
   - Enqueue: [G, H, I]

8. **Seventh Iteration**
   - Dequeue: G
   - Visited: {A, B, C, D, E, F, G}
   - Output: [A, B, C, D, E, F, G]
   - Neighbors: [E]
   - No new neighbors to enqueue

9. **Eighth Iteration**
   - Dequeue: H
   - Visited: {A, B, C, D, E, F, G, H}
   - Output: [A, B, C, D, E, F, G, H]
   - Neighbors: [F]
   - No new neighbors to enqueue

10. **Ninth Iteration**
    - Dequeue: I
    - Visited: {A, B, C, D, E, F, G, H, I}
    - Output: [A, B, C, D, E, F, G, H, I]
    - Neighbors: [F]
    - No new neighbors to enqueue

11. **End**
    - Queue is empty
    - Return output: [A, B, C, D, E, F, G, H, I]

### Final BFS Traversal Order

The BFS traversal order starting from node A is:
```
[A, B, C, D, E, F, G, H, I]
```

#### 6. Running the Demo

To run the BFS demo:

1. Save the JavaScript code in a file named `bfs_demo.js`.
2. Open a terminal and navigate to the directory where `bfs_demo.js` is saved.
3. Run the following command:

```sh
node bfs_demo.js
```

You should see the following output in the terminal:

```
BFS Traversal Order starting from A: [A, B, C, D, E, F, G, H, I]
```

This step-by-step guide covers the BFS traversal process from initialization to execution, providing a clear understanding of how the algorithm works and how to implement it in JavaScript.