class Node {
  constructor(val, state = {}) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.state = state;
    return this;
  }
}

class BST {
  constructor() {
    this.root = null;
  };

  find = val => {
    const root = this.root;
    if (!root) return null;

    let nextNode = root;

    while (nextNode) {
      if (nextNode.value === val) return nextNode;
      if (nextNode.left && val <= nextNode.left.value) nextNode = nextNode.left;
      else if (nextNode.right && val >= nextNode.right.value) nextNode = nextNode.right;
      else if (!nextNode.left && !nextNode.right) return null;
    }
  };

  add = (val, state) => {
    if (!this.root) return this.root = new Node(val, state);

    let nextNode = this.root;

    while (nextNode) {

      if (val <= nextNode.value) {
        if (!nextNode.left) return nextNode.left = new Node(val, state);
        nextNode = nextNode.left;
      }

      else {
        if (!nextNode.right) return nextNode.right = new Node(val, state);
        nextNode = nextNode.right;
      }
    }
  };
}

export {
  BST,
}
