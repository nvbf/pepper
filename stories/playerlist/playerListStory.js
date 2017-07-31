import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerList from '../../components/playerlist/PlayerList';
import { Bayern, ManUnited } from '../../mocks/teams';

storiesOf('PlayerList', module)
  .add('Bayern', () => <PlayerList team={Bayern} isShowing />)
  .add('ManUnited', () => <PlayerList team={ManUnited} isShowing />);
