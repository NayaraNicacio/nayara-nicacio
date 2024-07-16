const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila vazia', () => {
    const queue = new Queue();
    expect(queue.elements).toEqual([1, 5, 6, 2, 3, 4, 8]);
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size).toBe(7); // Inicialmente, a fila tem 7 elementos
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add(10);
    expect(queue.elements).toEqual([1, 5, 6, 2, 3, 4, 8, 10]);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(1); // O primeiro elemento da fila inicialmente é 1
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    const removedElement = queue.dequeue();
    expect(removedElement).toBe(1); // O primeiro elemento removido deve ser 1
    expect(queue.elements).toEqual([5, 6, 2, 3, 4, 8]); // A fila após a remoção
    expect(queue.size).toBe(6); // O tamanho da fila após a remoção
  });
});
