const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
    }
    add(data) {//2.если root есть то код идет сюда
    if(data < this.data) {
    this.addLeft(data)
    } else {
    this.addRight(data)
    }
    }
    addLeft(data) {
    if(this.left) {
    return this.left.add(data);//чтобы шло по кругу если лево занято
    }
    this.left = new Node(data);
    }
    addRight(data) {
    if(this.right) {
    return this.right.add(data);//чтобы шло по кругу если право занято
    }
    this.right = new Node(data);
    }
 }   
class BinarySearchTree {
   constructor() {
   this.root = null;
   }
  
   root() {
   return this.root
   }

   add(data) {//1.
   if(this.data === data) return;//если пришел повторяющийся элемент то ничего не делать
   if (this.root) { 
    return this.root.add(data);
  } 
   this.root = new Node(data);
  }
  
  find(data) {
  let current = this.root;// если в root нет элемента то он говорит undefind и дальше идет в while
  
  while(true) {
  if(current === undefined) 
  return console.log('no element'); // если не найдено то будет undefind 
  if(current.data === data) { //если нашли то возвращаем узел
  console.log('found')
  return current;
  }
  if(data < current.data) {
  current = current.left;//идти влево искать
  }else{
  current = current.right;//идти вправо искать
  } 
  }
  }
  
  has(data) {
    let current = this.root;// если в root нет элемента то он говорит undefind и дальше идет в while
  
  while(true) {
  if(current === undefined) {
  return false; 
  console.log('no element');
  } // если не найдено то будет undefind 
  if(current.data === data) { //если нашли то возвращаем узел
  console.log('found')
  return true;
  }
  if(data < current.data) {
  current = current.left;//идти влево искать
  }else{
  current = current.right;//идти вправо искать
  } 
  }
  }
}

//class BinarySearchTree {
//
//  root() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  add(/* data */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  has(/* data */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  find(/* data */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  remove(/* data */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  min() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//
//  max() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//}

module.exports = {
  BinarySearchTree
};