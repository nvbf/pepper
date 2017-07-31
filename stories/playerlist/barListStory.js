import React from 'react';
import { storiesOf } from '@storybook/react';
import BarList from '../../components/playerlist/BarList';
import { Bayern, ManUnited } from '../../mocks/teams';

storiesOf('BarList', module)
  .add('normal Bayern', () => <BarList isShowing team={Bayern} />)
  .add('bayern 2 selected', () => <BarList isShowing selectedIndex={2} team={Bayern} />)
  .add('ManUnited 5 selected', () => <BarList isShowing selectedIndex={5} team={ManUnited} />)
  .add('ManUnited 5 selected not showing', () =>
    <BarList isShowing={false} selectedIndex={5} team={ManUnited} />,
  );
