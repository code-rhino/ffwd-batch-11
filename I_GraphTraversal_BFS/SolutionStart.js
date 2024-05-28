// Define the graph using an adjacency list
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
  
  // Demonstrate BFS starting from node 'A'
  const startNode = 'A';
  const traversalOrder = bfs(graph, startNode);
  
  console.log(`BFS Traversal Order starting from ${startNode}:`, traversalOrder);