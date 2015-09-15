var expect = require('expect.js')
var Cell = require('./../cell.js')

describe('Cell', function() {
  it('calling new cell creates new Cell object', function() {
    expect(new Cell()).to.be.ok();
  })
})