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