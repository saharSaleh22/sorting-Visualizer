async function bfs(arr) {
    let queue = [0]; // start with the first element in the array
    let visited = new Array(arr.length).fill(false); // keep track of visited nodes
    visited[0] = true; // mark the starting node as visited
  
    while (queue.length > 0) {
      let current = queue.shift(); // dequeue the next node
      for (let neighbor of getNeighbors(current,arr)) {
        if (!visited[neighbor]) {
          visited[neighbor] = true; // mark the neighbor as visited
          queue.push(neighbor); // enqueue the neighbor
          drawArray(); // update the visualization
          await sleep(speed*50);
        }
      }
    }
  }
  
  function getNeighbors(index,arr) {
    let neighbors = [];
    if (index > 0) neighbors.push(index - 1); // add the previous element as a neighbor
    if (index < arr.length - 1) neighbors.push(index + 1); // add the next element as a neighbor
    return neighbors;
  }
  