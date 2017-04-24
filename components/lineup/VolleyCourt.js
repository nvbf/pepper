// @flow
import React from 'react';
import GradientFill from '../svgs/GradientFill';
import { darken } from 'polished';
import color from '../../libs/color';

function Pole(props: { height: number, dx: number, right: boolean }) {
  const poleColor = color.white;
  const width = props.height * 0.07;
  const topOffset = props.right ? -7 : 0;
  const offset = props.right ? -14 : 6;
  const circleRx = width / 2;
  const circleRy = width / 3;
  return (
    <g>
      <ellipse
        cx={props.dx + topOffset + circleRx}
        cy="1"
        rx={circleRx}
        ry={circleRy}
        fill={poleColor}
      />
      <ellipse
        cx={props.dx + offset + circleRx}
        cy={props.height}
        rx={circleRx}
        ry={circleRy}
        fill={poleColor}
      />
      <polygon
        shapeRendering="optimizeQuality"
        points={`
          ${props.dx + topOffset},0
          ${props.dx + width + topOffset},0
          ${props.dx + width + offset},${props.height}
          ${props.dx + offset},${props.height}
        `}
        fill={poleColor}
      />
    </g>
  );
}

function VolleyNet(props: { netHeight: number, leftX: number, rightX: number, bottomY: number }) {
  const netColor = color.white;
  const basePoleHeight = 250;
  const baseNetWidth = 950;
  const baseNetHeight = 100;
  const width = props.rightX - props.leftX;

  const ratio = width / baseNetWidth;
  const poleHeight = basePoleHeight * ratio;
  const poleRatio = props.netHeight / basePoleHeight;

  const netHeight = baseNetHeight * ratio;
  const netWidth = props.rightX - props.leftX;
  return (
    <g transform={`translate(${props.leftX},${props.bottomY - poleHeight})`}>
      <rect
        x={8}
        y={poleHeight * (1 - poleRatio)}
        width={netWidth - 16}
        height={netHeight - 8}
        stroke={netColor}
        strokeWidth={10 * ratio}
        fill="transparent"
      />
      <Pole height={poleHeight} dx={0} right={false} bottomY={props.bottomY} />
      <Pole height={poleHeight} dx={width} right />
    </g>
  );
}

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
      width={props.width + 4}
      height={props.height + 4}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GradientFill start={darken(0.2, color.blue)} stop={color.blue} id="leftGrad" />
      </defs>
      <polygon
        shapeRendering="optimizeQuality"
        points={`
          0,${props.height}
          ${props.width},${props.height}
          ${props.width * 0.75},0
          ${props.width * 0.25},0
        `}
        fill="url(#leftGrad)"
        stroke={color.white}
        strokeWidth={6}
      />
      <CourtLine yPercent={0.23} courtWidth={props.width} courtHeight={props.height} />
      <CourtLine yPercent={0.36} courtWidth={props.width} courtHeight={props.height} />
      <CourtLine yPercent={0.55} courtWidth={props.width} courtHeight={props.height} />
      <VolleyNet
        leftX={getLeftX(props.width, 0.55)}
        rightX={getRightX(props.width, 0.55)}
        bottomY={props.height * 0.36}
        netHeight={224}
      />
    </svg>
  );
}

export default VolleyCourt;
