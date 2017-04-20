import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Bar from '../components/playerlist/Bar';
import BarList from '../components/playerlist/BarList';

import { Bayern, ManUnited } from '../mocks/players';

const barStory = storiesOf('Bar', module);

barStory.add('normal', () => (
  <Bar animDelay={0} position="kant" name="David de Gea" active={false} number={1} />
));

barStory.add('libero', () => (
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active={false} number={12} />
));

barStory.add('active', () => (
  <Bar animDelay={0} position="kant" name="David de Gea" active number={1} />
));

barStory.add('active libero', () => (
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active number={12} />
));

const barListStory = storiesOf('BarList', module);

barListStory.add('normal Bayern', () => <BarList isShowing team={{ players: Bayern }} />);

barListStory.add('bayern 2 selected', () => (
  <BarList isShowing selectedIndex={2} team={{ players: Bayern }} />
));

barListStory.add('ManUnited 5 selected', () => (
  <BarList isShowing selectedIndex={5} team={{ players: ManUnited }} />
));

barListStory.add('ManUnited 5 selected not showing', () => (
  <BarList isShowing={false} selectedIndex={5} team={{ players: ManUnited }} />
));
