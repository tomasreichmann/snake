import React, { useEffect, useRef, useCallback, useState } from 'react';

export type DefaultComponentProps = {
  frame: number;
};

const DefaultComponent = ({ frame }) => `frame: ${frame}`;

export type LoopProps = {
  maxFrame?: number;
  maxDuration?: number;
  fps?: number;
  Component?: React.ComponentType<DefaultComponentProps>;
};

export default function Loop({
  maxFrame = 4,
  maxDuration = 10000,
  fps = 25,
  Component = DefaultComponent,
}: LoopProps) {
  const [frame, setFrame] = useState(0);
  const requestRef = useRef(undefined as number);
  const startTimeRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = useCallback(
    (time) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = time;
      }
      const elapsed = time - startTimeRef.current;
      const frameDuration = 1000 / fps;
      //const timeInSeconds = Math.floor(elapsed / 1000);
      const frame = Math.floor(elapsed / frameDuration);
      setFrame(frame % maxFrame);

      previousTimeRef.current = time;
      if (elapsed <= maxDuration) {
        requestRef.current = requestAnimationFrame(animate);
      }
    },
    [maxFrame]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  return <Component frame={frame} />;
}
