import React from 'react';
import { storiesOf } from '@storybook/react';
import Bar from '../../components/playerlist/Bar';

storiesOf('Bar', module)
  .add('normal', () =>
    <Bar animDelay={0} position="kant" name="David de Gea" active={false} number={1} />,
  )
  .add('libero', () =>
    <Bar animDelay={0} position="libero" name="Magnus Rodahl" active={false} number={12} />,
  )
  .add('active', () => <Bar animDelay={0} position="kant" name="David de Gea" active number={1} />)
  .add('active libero', () =>
    <Bar animDelay={0} position="libero" name="Magnus Rodahl" active number={12} />,
  );
