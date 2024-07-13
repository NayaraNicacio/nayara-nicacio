const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {

const queue = new Queue()
expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
const size = new Queue()
expect(size).toEqual({ size: []})
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
const add = new Queue()
expect(add).toEqual({ add: []})
  })

  it('Deve escolher o primeiro item da fila', () => {
const peek = new Queue()
expect(peek).toEqual({ peek: []})
  })

  it('Deve remover o primeiro item da fila', () => {
const dequeue = new Queue()
expect(dequeue).toEqual({ dequeue: []})
  })
})