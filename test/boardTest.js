var expect = require('expect.js')
var Board = require('./../board.js')

describe('Board', function() {
  
  it('constructor takes size and generates square board with dimensions of size', function() {
    var board = new Board(20);
    expect(board.cells.length).to.be(20)
    expect(board.cells[0].length).to.be(20)
  })
})