//Objective is to find the most frequent sum that occurs in any given subtree

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that maps out all possible sums to a hashmap then finds the 
//key with the largest frequency

let map = {}
    
function dfs(node) {
    if (!node) {
        return 0
    }
    let left = dfs(node.left) 
    let right = dfs(node.right)
    
    let sum = node.val + left + right
    if (!map[sum]) {
        map[sum] = 1
    } else {
        map[sum]++
    }
    
    return sum
}
dfs(tree.root)

let result = []

let max = Math.max(...Object.values(map))
for (let key in map) {
    if (map[key] == max) {
        result.push(key)
    }
}

return result