const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    if (this.r) {
      let tree = this.r;
      while(true) {
        if (tree.data > data) {
          if (tree.left === null) {
            tree.left = new Node(data);
            break;
          } else {
            tree = tree.left;
          }
        } else {
          if (tree.right === null) {
            tree.right = new Node(data);
            break;
          } else {
            tree = tree.right;
          }
        }
      }
    } else {
      this.r = new Node(data);
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    let tree = this.r;
    while(true) {
      if (tree === null) {
        return null;
      } else if (tree.data === data) {
        return tree;
      } else {
        if (tree.data > data) {
          tree = tree.left;
        } else {
          tree = tree.right;
        }
      }
    }
  }

  remove(data) {
    let nodeToRemove = this.find(data);
    if (!nodeToRemove) {
      return;
    }

    let newSubtree;
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      newSubtree = null;
    } else if (nodeToRemove.left === null) {
      newSubtree = nodeToRemove.right;
    } else if (nodeToRemove.right === null) {
      newSubtree = nodeToRemove.left;
    } else {
      let leftChild = nodeToRemove.left;
      newSubtree = nodeToRemove.right;
      let n = newSubtree;
      while (n.left !== null) {
        n = n.left;
      }
      n.left = leftChild;
    }

    if (this.r.data === data) {
      this.r = newSubtree;
    } else {
      let tree = this.r;
      while (true) {
        if (tree.left && tree.left.data === data) {
          tree.left = newSubtree;
          break;
        }
        if (tree.right && tree.right.data === data) {
          tree.right = newSubtree;
          break;
        }
        if (tree.data > data) {
          tree = tree.left;
        } else {
          tree = tree.right;
        }
      }
      
    }
  }

  min() {
    if (this.r) {
      let tree = this.r;
      while (tree.left !== null) {
        tree = tree.left;
      }
      return tree.data;
    } else {
      return null;
    }    
  }

  max() {
    if (this.r) {
      let tree = this.r;
      while (tree.right !== null) {
        tree = tree.right;
      }
      return tree.data;
    } else {
      return null;
    }   
  }
}

module.exports = {
  BinarySearchTree
};
