'use client';

import { useEffect, useRef } from 'react';
import { COLORS } from '@/app/game/_lib/constants';
import { drawGrid } from '@/app/game/_lib/drawGrid';

type GameProps = {
    view: string,
    width?: number,
    height?: number,
};

const tmpViewToColor: Record<string, string> = {
  play: 'blue',
  setup: 'green',
  splash: 'purple',
  results: 'red',
} as const;

export const Game = ({ view, width = 500, height = 500 }: GameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const xMax = 10;
  const yMax = 10;

  useEffect(() => {
    drawGrid({ canvasRef, xMax, yMax, color: tmpViewToColor[view] ?? COLORS.orange });
  }, [view]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
