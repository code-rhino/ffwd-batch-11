// Define the graph using an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  

  function hasCycle(graph) {
    return false;
  }

  const containsCycle = hasCycle(graph)
  
  console.log('Does the graph contain a cycle?', containsCycle);