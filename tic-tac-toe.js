document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const result = document.querySelector(".result");
  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameOver = false;

  function handleCellClick(index) {
    if (board[index] === '' && !gameOver) {
      board[index] = currentPlayer;
      cells[index].textContent = currentPlayer;
      cells[index].classList.add(currentPlayer);

      if (checkWin(currentPlayer)) {
        result.textContent = `Player ${currentPlayer} wins!`;
        gameOver = true;
      } else if (isBoardFull()) {
        result.textContent = "It's a draw!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function checkWin(player) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
      return combination.every(index => board[index] === player);
    });
  }

  function isBoardFull() {
    return board.every(cell => cell !== '');
  }

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
  });
});
