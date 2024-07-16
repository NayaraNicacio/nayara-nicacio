class Queue {
  constructor() {
    this.elements = [1, 5, 6, 2, 3, 4, 8];
    this.size = this.elements.length;
  }

  add(element) {
    this.elements.push(element);
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.elements[0];
    } else {
      return undefined; // or throw an error, depending on desired behavior
    }
  }

  dequeue() {
    if (this.size > 0) {
      this.size--;
      return this.elements.shift();
    } else {
      return undefined; // or throw an error, depending on desired behavior
    }
  }
}

module.exports = Queue;