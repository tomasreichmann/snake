export enum CellContentEnum {
  Empty = 'Empty',
  Food = 'Food',
  SnakeHead = 'SnakeHead',
  SnakeBodyStraight = 'SnakeBodyStraight',
  SnakeBodyCurved = 'SnakeBodyCurved',
  SnakeTail = 'SnakeTail',
}

export enum OrientationEnum {
  Up = 0,
  Right = 90,
  Down = 180,
  Left = 270,
}

export type CellType = {
  x: number;
  y: number;
  content: CellContentEnum;
  rotate: number;
};
