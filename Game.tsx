import React from 'react';
import Board from './Board';
import { CellContentEnum, CellType, OrientationEnum } from './types';

export type GameProps = {
  frame;
};

const generateBoard = (width, height): CellType[][] => {
  return Array(height)
    .fill(null)
    .map((_, y) => {
      return Array(width)
        .fill(null)
        .map((_, x) => {
          return {
            x,
            y,
            content: CellContentEnum.Empty,
            rotate: 0,
          } as CellType;
        });
    });
};

const board = generateBoard(4, 4);

board[3][1].content = CellContentEnum.SnakeHead;
board[3][1].rotate = OrientationEnum.Down;

board[2][1].content = CellContentEnum.SnakeBodyStraight;
board[2][1].rotate = OrientationEnum.Down;

board[2][1].content = CellContentEnum.SnakeBodyCurved;
board[2][1].rotate = OrientationEnum.Right;

board[1][2].content = CellContentEnum.SnakeBodyCurved;
board[1][2].rotate = OrientationEnum.Left;

board[0][2].content = CellContentEnum.SnakeTail;
board[0][2].rotate = OrientationEnum.Up;

console.log(board);

export default function Game({}: GameProps) {
  return <Board board={board} />;
}
