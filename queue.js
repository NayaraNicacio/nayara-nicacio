class Queue {
  elements
  constructor(){
    this.elements = [1,5,6,2,3,4,8]
  }
  size
  constructor(){
    this.size = []
    return this.elements.length;
  }
  add
  constructor(){
    this.add = []
    add(element) {
      this.elements.push(element);
    }
  }
  peek
  constructor(){
    this.peek = []
  }

  dequeue
  constructor(){
    this.dequeue = []  
    return this.elements.shift();
  }
  }


}

module.exports = Queue