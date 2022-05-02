const { NotImplementedError } = require('../extensions/index.js')

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addWithin(this.tree, data)
    function addWithin(node, value) {
      if (!node) {
        return { data: value, left: null, right: null }
      }
      if (node.data === value) {
        return node
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value)
      } else node.right = addWithin(node.right, value)
      return node
    }
  }

  has(data) {
    return searchWithin(this.tree, data)

    function searchWithin(node, value) {
      if (!node) {
        return false
      }

      if (node.data === value) {
        return true
      }

      if (value < node.data) {
        return searchWithin(node.left, value)
      } else {
        return searchWithin(node.right, value)
      }
    }
  }

  find(data) {
    return findWithin(this.tree, data)

    function findWithin(node, value) {
      if (!node) {
        return null
      }

      if (node.data === value) {
        return node
      }

      if (value < node.data) {
        return findWithin(node.left, value)
      } else {
        return findWithin(node.right, value)
      }
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data)

    function removeNode(node, value) {
      if (!node) {
        return null
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node
      } else if (node.data < value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromright = node.right
        while (minFromright.left) {
          minFromright = minFromright.left
        }

        node.data = minFromright.data
        node.right = removeNode(node.right, minFromright.data)

        return node
      }
    }
  }

  min() {
    if (!this.tree) {
      return
    }

    let node = this.tree
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.tree) {
      return
    }

    let node = this.tree
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
