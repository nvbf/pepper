import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';
import { host } from 'storybook-host';
import VolleyNet from '../components/lineup/VolleyNet';
import VolleyCourt from '../components/lineup/VolleyCourt';
import VolleyCourtWithNet from '../components/lineup/VolleyCourtWithNet';

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

const numberRange = (label, min, max) =>
  number(
    label,
    0,
    {
      range: true,
      min,
      max,
      step: 1,
      default: 1,
    },
    1,
  );

lineupStory.add('net only', () => (
  <VolleyNet
    width={numberRange('court width', 500, 900)}
    netHeight={numberRange('net height', 224, 243)}
  />
));

lineupStory.add('court only', () => <VolleyCourt width={800} height={500} />);

lineupStory.add('court with net', () => (
  <VolleyCourtWithNet
    height={numberRange('height', 200, 800)}
    width={numberRange('width', 300, 1000)}
  />
));
