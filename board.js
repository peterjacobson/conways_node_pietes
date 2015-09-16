var Board = function(size) {
  this.cells = this.createAndSeedBoard(size)
}

Board.prototype = {
  createAndSeedBoard: function(size) {
    var cells = [];
    for (var i = 0; i < size; i++) {
      var row = []
      for (var j = 0; j < size; j++) {
        row.push('cell');
      }
      cells.push(row)
    };
    return cells
  }
}


module.exports = Board