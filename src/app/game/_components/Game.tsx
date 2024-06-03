'use client';

import { useState } from 'react';
import { getRandInt } from '@/app/game/_lib/getRandNum';

type GameProps = {
    view: string,
    width?: number,
    height?: number,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Game = (_: GameProps) => {
  const xMax = 10;
  const yMax = 10;

  const initBoard = () => new Array(xMax + 1).fill('.').map(() => new Array(yMax + 1).fill('.'));
  const [board, setBoard] = useState(initBoard);

  const spawnEntity = (type: any, coord?: [number, number]) => {
    const [x, y] = coord ?? [getRandInt(board[0].length - 1), getRandInt(board.length - 1)];

    if (board[y][x] === '.') {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row]);
        newBoard[y][x] = type;
        return newBoard;
      });
    }
  };

  const onClickHandler = () => {
    spawnEntity('G');
  };

  const renderBoard = () => {
    return board.map(row => row.join('  ')).join('\n');
  };

  return (
    <div>
      <pre>{renderBoard()}</pre>
      <br/>
      <button onClick={onClickHandler}>Spawn Grass</button>
    </div>
  );
};
