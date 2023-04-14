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
    this.rootNum = null;
   }
  
   root() {
    return this.rootNum
   }

   add(data) {//1.
    if(this.data === data) return;//если пришел повторяющийся элемент то ничего не делать
    if (this.rootNum) { 
  return this.rootNum.add(data);
  } 
   this.rootNum = new Node(data);
  }
  
  find(data) {
    let current = this.rootNum;// если в root нет элемента то он говорит undefind и дальше идет в while
  
  while(true) {
    if(current === null||current === undefined) 
  return null; console.log('no element'); // если не найдено то будет undefind 
    if(current.data === data) { //если нашли то возвращаем узел
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
    let current = this.rootNum;// если в root нет элемента то он говорит undefind и дальше идет в while
  
  while(true) {
    if(current === null||current === undefined||data === null||data === undefined) {
  return false; 
  } // если не найдено то будет undefind 
    if(current.data === data) { //если нашли то возвращаем узел
  return true;
  }
  if(data < current.data) {
    current = current.left;//идти влево искать
  }else{
    current = current.right;//идти вправо искать
  } 
  }
  }

  minNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
  if (node.left === null) {
    return node;
  } else {
    return this.minNode(node.left);
  }
  }

  remove(data) {
    this.rootNum = this.removeNode(this.rootNum, data); // helper method below
  }
  removeNode(node, data) {
    if (node === null) {
  return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
  } else if (data < node.data) {
    node.left = this.removeNode(node.left, data);
  return node;
    // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
  } else if (data > node.data) {
    node.right = this.removeNode(node.right, data);
  return node;
    // если данные такие как данные корня, удаляем узел
  } else {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
  if (node.left === null && node.right === null) {
    node = null;
  return node;
  }
        // удаляем узел с одним потомком
  if (node.left === null) {
    node = node.right;
  return node;
  } else if(node.right === null) {
    node = node.left;
  return node;
  }
        // удаляем узел с двумя потомками
        // minNode правого поддерева хранится в новом узле
  let newNode = this.minNode(node.right);
    node.data = newNode.data;
    node.right = this.removeNode(node.right, newNode.data);
  return node;
  }
}

min() {
 if (this.rootNum === null) return null;
  // если слева от узла ноль тогда это должен быть минимальный узел
 let node = this.rootNum;
  while (node.left) {
    node = node.left;
  }
  return node.data;// передать значение этой ноды
}

max() {
  if (this.rootNum === null) return null;
  let node = this.rootNum;
  while (node.right) {
    node = node.right;
  }
  return node.data;
}
}

module.exports = {
  BinarySearchTree
};