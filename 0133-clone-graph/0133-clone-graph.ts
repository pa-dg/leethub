/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */

function cloneGraph(node: _Node | null): _Node | null {
    // edge case: if input node is null, return null as there's no graph to clone
	if (!node) return null;
    
    let stack: _Node[] = [node]
    let map: Map<Node, Node> = new Map();
    
    // clone start node and store in map
    map.set(node, new Node(node.val))
    
    // dfs to traverse graph and clone nodes
    while (stack.length > 0) {
        let currentNode = stack.pop()!;
        
        // iterate over all neighbors of the current node
        for (let neighbor of currentNode.neighbors) {
            // if neighbor not exist in map, clone and store in map
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                // add to stack to explore neighbors later
                stack.push(neighbor)
            }
            
            // link cloned neighbor to current cloned node
            map.get(currentNode)!.neighbors.push(map.get(neighbor)!)
        }
    }
    // return the clone of the original starting node
    return map.get(node) || null 
};


// recursive solution
// function cloneGraph(node: _Node | null): _Node | null {
//     // edge case: if input node is null, return null as there's no graph to clone
// 	if (!node) return null;
    
//     // map to store already cloned nodes, to avoid re-cloning and handle cycles
//     const clonedNodesMap: Map<Node, Node> = new Map()
    
//     // use helper function to perform DFS and clone the graph
//     function clone(node: Node): Node {
//         // check if this is already cloned, return the clone
//         if (clonedNodesMap.has(node)) return clonedNodesMap.get(node)!;
        
//         // clone the current node (but its neighbors will be empty for now)
//         const clonedNode = new Node(node.val)
        
//         // store this node in the map before exploring neighbors
//         clonedNodesMap.set(node, clonedNode)
        
//         // iterate through each neighbor and clone recursively
//         for (let neighbor of node.neighbors) {
//             // add the cloned neighbor to the cloned node's neighbor's list
//             clonedNode.neighbors.push(clone(neighbor));
//         }
        
//         // return the fully cloned node
//         return clonedNode
//     }
    
//     // initiate DFS cloning from input node
//     return clone(node)
// };