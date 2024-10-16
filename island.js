function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  let neighbors = [];
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
  if (row < graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);
  if (col > 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
  if (col < graph[0].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
  let visited = new Set();
  let stack = [[row, col]];
  visited.add(`${row},${col}`);
  let size = 0;

  while (stack.length) {
    let [currentRow, currentCol] = stack.pop();
    size++;
    let neighbors = getNeighbors(currentRow, currentCol, graph);
    neighbors.forEach(([neighborRow, neighborCol]) => {
      let neighborKey = `${neighborRow},${neighborCol}`;
      if (!visited.has(neighborKey)) {
        stack.push([neighborRow, neighborCol]);
        visited.add(neighborKey);
      }
    });
  }
  return size;
}

module.exports = [getNeighbors, islandSize];