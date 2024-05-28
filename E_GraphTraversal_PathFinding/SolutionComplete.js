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
  
  // Implement the DFS path-finding function
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
  
  // Helper function to initiate DFS path finding
  function findPath(graph, start, goal) {
    const path = dfsPath(graph, start, goal);
    return path ? path : `No path found from ${start} to ${goal}`;
  }
  
  // Demonstrate finding a path from 'A' to 'I'
  const startNode = 'A';
  const goalNode = 'I';
  const path = findPath(graph, startNode, goalNode);
  
  console.log(`Path from ${startNode} to ${goalNode}:`, path);