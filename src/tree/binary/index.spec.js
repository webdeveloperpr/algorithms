import { BST } from './';

describe.only('Should manipulate a BST', () => {
  it('Create a BST', () => {
    const bst = new BST();
    bst.add(4, { name: 'four' });
    bst.add(3, { name: 'three' });
    bst.add(2, { name: 'two' });
    bst.add(1, { name: 'one' });
    bst.add(5, { name: 'five' });
    bst.add(6, { name: 'six' });
    bst.add(7, { name: 'seven' });
    // console.log(JSON.stringify(bst.root, null, 2));
  });
  it('Create a BST and find a value', () => {
    console.clear();
    const bst = new BST();
    bst.add(4, { name: 'four' });
    bst.add(3, { name: 'three' });
    bst.add(2, { name: 'two' });
    bst.add(1, { name: 'one' });
    bst.add(5, { name: 'five' });
    bst.add(6, { name: 'six' });
    bst.add(7, { name: 'seven' });
    const node = bst.find(7);
    expect(node.state.name).to.equal('seven');
  });
});