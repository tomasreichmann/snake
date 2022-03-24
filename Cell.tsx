import React from 'react';
import clsx from 'clsx';

import './Cell.module.css';
import { CellType } from './types';

export type CellProps = CellType & {};

export default function Cell({ content, x, y }: CellProps) {
  return (
    <div
      className={clsx('Cell', 'Cell__' + content)}
      style={{ '--x': x, '--y': y }}
    >
      {content}
    </div>
  );
}
