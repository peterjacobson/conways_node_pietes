var expect = require('expect.js')
var Cell = require('./../cell.js')

describe('Cell', function() {
  it('constructor sets alive state', function() {
    var cell = new Cell(true)
    expect(cell.isAlive).to.be(true);
  })
})