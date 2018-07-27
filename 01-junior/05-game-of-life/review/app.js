console.log("loaded...")

class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }

  appendChildNode(childNode) {
    this.children.push(childNode)
  }

  appendValue(value) {
    this.appendChildNode(new Node(value))
  }

  findBreadthFirst(value) {
    let pendingNodes = [this]

    while (pendingNodes.length > 0) {
      let currentNode = pendingNodes.shift()

      console.log("Looking at", currentNode, "for", value)

      if (currentNode.value === value) {
        return currentNode
      } else {
        // pendingNodes = [...pendingNodes, ...currentNode.children]
        pendingNodes.push(...currentNode.children)
      }
    }

    return null
  }
}

let root = new Node(10)
root.appendValue(5)
root.appendValue(7)
root.appendValue(10)
root.appendValue(12)
let secondChild = root.children[1]
secondChild.appendValue(13)
secondChild.appendValue(17)
secondChild.appendValue(23)
secondChild.appendValue(193)
let thirdChild = secondChild.children[2]
thirdChild.appendValue(103)
thirdChild.appendValue(130)
thirdChild.appendValue(313)

