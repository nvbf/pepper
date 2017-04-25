// @flow
import React from 'react';
import { darken } from 'polished';
import GradientFill from '../svgs/GradientFill';
import color from '../../libs/color';
import VolleyNetAndPoles from './VolleyNetAndPoles';

function getLeftX(width: number, y: number) {
  return 0.25 * width * (1 - y);
}

function getRightX(width: number, y: number) {
  return width - getLeftX(width, y);
}

function CourtLine(props: { courtWidth: number, courtHeight: number, yPercent: number }) {
  return (
    <line
      x1={getLeftX(props.courtWidth, props.yPercent)}
      y1={props.courtHeight * props.yPercent}
      x2={getRightX(props.courtWidth, props.yPercent)}
      y2={props.courtHeight * props.yPercent}
      style={{ stroke: '#fff', strokeWidth: 2 }}
    />
  );
}

function VolleyCourt(props: { width: number, height: number }) {
  return (
    <svg
      shapeRendering="optimizeQuality"
      width={props.width + 8}
      height={props.height + 8}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GradientFill start={darken(0.2, color.blue)} stop={color.blue} id="courtGrad" />
      </defs>
      <g transform={'translate(4,0)'}>
        <polygon
          shapeRendering="optimizeQuality"
          points={`
          0,${props.height}
          ${props.width},${props.height}
          ${props.width * 0.75},0
          ${props.width * 0.25},0
        `}
          fill="url(#courtGrad)"
          stroke={color.white}
          strokeWidth={4}
        />
        <CourtLine yPercent={0.23} courtWidth={props.width} courtHeight={props.height} />
        <CourtLine yPercent={0.36} courtWidth={props.width} courtHeight={props.height} />
        <CourtLine yPercent={0.55} courtWidth={props.width} courtHeight={props.height} />
        <VolleyNetAndPoles
          leftX={getLeftX(props.width, 0.55)}
          rightX={getRightX(props.width, 0.55)}
          bottomY={props.height * 0.36}
          netHeight={224}
        />
      </g>
    </svg>
  );
}

export default VolleyCourt;
