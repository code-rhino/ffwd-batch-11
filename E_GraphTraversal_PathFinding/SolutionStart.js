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
  
 
  function findPath(graph, start, goal) {

  }
  
  const startNode = 'A';
  const goalNode = 'I';
  const path = findPath(graph, startNode, goalNode);
  
  console.log(`Path from ${startNode} to ${goalNode}:`, path);