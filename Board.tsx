import React from 'react';

import './Board.module.css';
import Cell from './Cell';
import { CellType } from './types';

export type BoardProps = {
  board: CellType[][];
};

export default function Board({ board }: BoardProps) {
  const width = board[0]?.length || 0;
  const height = board?.length || 0;
  return (
    <div className="Board" style={{ '--width': width, '--height': height }}>
      {board.reduce((elements, row) => {
        elements.push(
          ...row.map((cell) => <Cell key={`${cell.x}-${cell.y}`} {...cell} />)
        );
        return elements;
      }, [] as JSX.Element[])}
    </div>
  );
}
