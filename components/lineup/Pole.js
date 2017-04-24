// @flow
import React from 'react';
import color from '../../libs/color';

export type PoleProps = {
  height: number,
  dx: number,
  right: boolean,
};

function Pole(props: PoleProps) {
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

export default Pole;
