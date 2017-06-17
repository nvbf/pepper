import React from 'react';
import { storiesOf } from '@storybook/react';
import Bar from '../components/playerlist/Bar';
import BarList from '../components/playerlist/BarList';
import BigHeader from '../components/playerlist/BigHeader';
import { PlayerList } from '../components/playerlist/PlayerList';

import { Bayern, ManUnited } from '../mocks/teams';

const barStory = storiesOf('Bar', module);

barStory.add('normal', () =>
  <Bar animDelay={0} position="kant" name="David de Gea" active={false} number={1} />,
);

barStory.add('libero', () =>
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active={false} number={12} />,
);

barStory.add('active', () =>
  <Bar animDelay={0} position="kant" name="David de Gea" active number={1} />,
);

barStory.add('active libero', () =>
  <Bar animDelay={0} position="libero" name="Magnus Rodahl" active number={12} />,
);

const barListStory = storiesOf('BarList', module);

barListStory.add('normal Bayern', () => <BarList isShowing team={Bayern} />);

barListStory.add('bayern 2 selected', () => <BarList isShowing selectedIndex={2} team={Bayern} />);

barListStory.add('ManUnited 5 selected', () =>
  <BarList isShowing selectedIndex={5} team={ManUnited} />,
);

barListStory.add('ManUnited 5 selected not showing', () =>
  <BarList isShowing={false} selectedIndex={5} team={ManUnited} />,
);

const headerStory = storiesOf('BigHeader', module);

headerStory.add('Bayern', () => <BigHeader isShowing logo={Bayern.logo} text={Bayern.name} />);

headerStory.add('ManUnited', () =>
  <BigHeader isShowing logo={ManUnited.logo} text={ManUnited.name} />,
);

const playerListStory = storiesOf('PlayerList', module);

playerListStory.add('Bayern', () => <PlayerList team={Bayern} isShowing />);

playerListStory.add('ManUnited', () => <PlayerList team={ManUnited} isShowing />);
