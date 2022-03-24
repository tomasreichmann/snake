import React from 'react';
import clsx from 'clsx';

import body_toprightUri from './images/body_topright.png';
import body_verticalUri from './images/body_vertical.png';
import head_upUri from './images/head_up.png';
import tail_upUri from './images/tail_up.png';

import './Cell.module.css';
import { CellContentEnum, CellType } from './types';

const imageMap = {
  [CellContentEnum.Empty]: null,
  [CellContentEnum.SnakeBodyCurved]: body_toprightUri,
  [CellContentEnum.SnakeBodyStraight]: body_verticalUri,
  [CellContentEnum.SnakeHead]: head_upUri,
  [CellContentEnum.SnakeTail]: tail_upUri,
};

export type CellProps = CellType & {};

export default function Cell({ content, x, y }: CellProps) {
  const imageUri = imageMap[content];
  const image = imageUri && <img src={imageUri} className="Cell_image" />;
  return (
    <div
      className={clsx('Cell', 'Cell__' + content)}
      style={{ '--x': x, '--y': y }}
    >
      {content}
      {image}
    </div>
  );
}
