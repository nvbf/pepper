import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { action } from '@storybook/addon-actions';
import ScoreControl from '../../components/admin/scorecontrol/ScoreControl';
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
  .add('with three sets', () => <ScoreControl homeTeam={ManUnited} awayTeam={Bayern} sets={sets} />)
  .add('with two sets', () =>
    <ScoreControl homeTeam={ManUnited} awayTeam={Bayern} sets={sets.slice(0, 2)} />,
  )
  .add('with one set', () =>
    <ScoreControl homeTeam={ManUnited} awayTeam={Bayern} sets={sets.slice(0, 1)} />,
  );
