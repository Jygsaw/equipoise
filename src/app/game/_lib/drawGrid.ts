import { COLORS } from '@/app/game/_lib/constants';

import type { RefObject } from 'react';

type drawGridProps = {
    canvasRef: RefObject<HTMLCanvasElement>,
    xMax: number,
    yMax: number,
    color?: string,
    lineWidth?: number,
};

export const drawGrid = (props: drawGridProps) => {
  const { canvasRef, xMax, yMax, color = COLORS.black, lineWidth = 1 } = props;
  const canvas = canvasRef.current;
  const context = canvas?.getContext('2d');

  if (canvas && context) {
    const xFactor = canvas.width / xMax;
    const yFactor = canvas.height / yMax;

    context.lineWidth = lineWidth;
    context.strokeStyle = color;

    for (let i = 0; i < xMax + 1; i++) {
      context.beginPath();
      context.moveTo(xFactor * i, 0);
      context.lineTo(xFactor * i, canvas.width);
      context.stroke();
    }

    for (let i = 0; i < yMax + 1; i++) {
      context.beginPath();
      context.moveTo(0, yFactor * i);
      context.lineTo(canvas.height, yFactor * i);
      context.stroke();
    }
  }
};
