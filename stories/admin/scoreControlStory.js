import React from 'react';
import { storiesOf } from '@storybook/react';
import ScoreControl from '../../components/admin/scorecontrol/ScoreControl';
import { host } from 'storybook-host';
import { ManUnited, Bayern } from '../../mocks/teams';

const sets = [
  {
    homeScore: 25,
    awayScore: 21,
    setNumber: 1,
  },
  {
    homeScore: 25,
    awayScore: 23,
    setNumber: 2,
  },
  {
    homeScore: 9,
    awayScore: 16,
    setNumber: 3,
  },
];

storiesOf('ScoreControl', module)
  .addDecorator(
    host({
      title: 'ScoreControl',
      align: 'center center',
      height: 500,
      width: 500,
      background: '#ffffff',
    }),
  )
  .add('default', () => <ScoreControl homeTeam={ManUnited} awayTeam={Bayern} sets={sets} />);
