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
  const dfs = (graph, start) =>{
    let output = [];
    return output;
  }
  
  // Perform DFS starting from node 'A'
  const traversalOrder = dfs(graph, 'A');
  console.log('DFS Traversal Order:', traversalOrder);