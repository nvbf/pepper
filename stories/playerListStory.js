import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Bar from '../components/playerlist/Bar';

const playerList = storiesOf('Bar', module);

playerList.add('normal', () => (
  <Bar animDelay={0} position="kant" name="David de Gea" active={false} number={1} />
));

playerList.add('libero', () => (
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active={false} number={12} />
));

playerList.add('active', () => (
  <Bar animDelay={0} position="kant" name="David de Gea" active number={1} />
));

playerList.add('active libero', () => (
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active number={12} />
));
