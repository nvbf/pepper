// @flow
import React from 'react';
import Pole from './Pole';
import color from '../../libs/color';

export type NetAndPoleProps = {
  netHeight: number,
  leftX: number,
  rightX: number,
  bottomY: number,
};

function VolleyNetAndPoles(props: NetAndPoleProps) {
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

export default VolleyNetAndPoles;
