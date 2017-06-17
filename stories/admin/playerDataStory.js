import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerData from '../../components/admin/playerdata/PlayerData';
import { Bayern } from '../../mocks/teams';

storiesOf('PlayerData', module).add('default', () =>
  (<PlayerData
    team={Bayern}
    activePlayers={Bayern.players.map(p => p.number).filter(num => num % 2 !== 0)}
  />),
);
