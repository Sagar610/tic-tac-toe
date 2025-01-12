import { useState } from 'react';

const useGameLogic = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);

  const handleClick = (index) => {
    if (gameStatus || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameStatus(`${board[a]} wins!`);
        return;
      }
    }
    if (!board.includes(null)) setGameStatus('draw');
  };

  return {
    board,
    isXTurn,
    gameStatus,
    handleClick,
  };
};

export default useGameLogic;
