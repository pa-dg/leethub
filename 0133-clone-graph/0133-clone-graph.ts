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
    
    // map to store already cloned nodes, to avoid re-cloning and handle cycles
    const clonedNodesMap: Map<Node, Node> = new Map()
    
    // use helper function to perform DFS and clone the graph
    function clone(node: Node): Node {
        // check if this is already cloned, return the clone
        if (clonedNodesMap.has(node)) return clonedNodesMap.get(node)!;
        
        // clone the current node (but its neighbors will be empty for now)
        const clonedNode = new Node(node.val)
        
        // store this node in the map before exploring neighbors
        clonedNodesMap.set(node, clonedNode)
        
        // iterate through each neighbor and clone recursively
        for (let neighbor of node.neighbors) {
            // add the cloned neighbor to the cloned node's neighbor's list
            clonedNode.neighbors.push(clone(neighbor));
        }
        
        // return the fully cloned node
        return clonedNode
    }
    
    // initiate DFS cloning from input node
    return clone(node)
};