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
      let stack = [start];
      let visited = new Set();
      let output = [];
    
      while (stack.length > 0){
        let node = stack.pop();
        if(!visited.has(node)){
          visited.add(node);
          output.push(node);
  
          let neighbors = graph[node];
          for(let neighbor of neighbors){
            if(!visited.has(neighbor)){
              stack.push(neighbor);
            }
          }
        }
  
      }
      return output;
    }
    
    // Perform DFS starting from node 'A'
    const traversalOrder = dfs(graph, 'A');
    console.log('DFS Traversal Order:', traversalOrder);