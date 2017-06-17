import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import VolleyNet from '../components/lineup/VolleyNet';
import VolleyCourt from '../components/lineup/VolleyCourt';
import Lineup from '../components/lineup/Lineup';

const lineupStory = storiesOf('Lineup', module);
lineupStory.addDecorator(
  host({
    title: 'Lineup.',
    align: 'center center',
    height: '80%',
    width: 1000,
    background: '#444444',
  }),
);
lineupStory.addDecorator(withKnobs);

const numberRange = (label, min, max, def = 0) =>
  number(
    label,
    def,
    {
      range: true,
      min,
      max,
      step: 1,
      default: 1,
    },
    1,
  );

lineupStory.add('net only', () =>
  (<VolleyNet
    width={numberRange('court width', 500, 900, 600)}
    netHeight={numberRange('net height', 224, 243, 243)}
  />),
);

lineupStory.add('court with net', () =>
  (<VolleyCourt
    height={numberRange('height', 200, 800, 300)}
    width={numberRange('width', 300, 1000, 400)}
  />),
);

lineupStory.add('full lineup', () => <Lineup />);
