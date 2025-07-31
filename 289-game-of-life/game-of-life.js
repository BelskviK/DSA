/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const m = board.length;
  const n = board[0].length;
  // Relative neighbors (8 directions)
  const dirs = [
    [ -1, -1 ], [ -1, 0 ], [ -1, 1 ],
    [  0, -1 ],           [  0, 1 ],
    [  1, -1 ], [  1, 0 ], [  1, 1 ]
  ];
  
  // 2: dead -> live, 3: live -> dead
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveCount = 0;
      for (const [dx, dy] of dirs) {
        const x = i + dx, y = j + dy;
        if (
          x >= 0 && x < m &&
          y >= 0 && y < n &&
          (board[x][y] === 1 || board[x][y] === 3)
        ) {
          liveCount++;
        }
      }
      // Apply rules with markers
      if (board[i][j] === 1) {
        // Under-/over-population
        if (liveCount < 2 || liveCount > 3) {
          board[i][j] = 3;
        }
      } else {
        // Reproduction
        if (liveCount === 3) {
          board[i][j] = 2;
        }
      }
    }
  }
  
  // Finalize states
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) board[i][j] = 1;
      else if (board[i][j] === 3) board[i][j] = 0;
    }
  }
};
