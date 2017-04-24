import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number, text } from '@kadira/storybook-addon-knobs';
import Scoreboard from '../components/scoreboard/Scoreboard';
import { Bayern, ManUnited } from '../mocks/teams';

const scoreboardStory = storiesOf('Scoreboard', module);
scoreboardStory.addDecorator(withKnobs);

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

scoreboardStory.add('with two teams', () => {
  const bayernScore = {
    name: text('bayern name', Bayern.shortName),
    logo: Bayern.logo,
    sets: numberRange('bayern sets', 0, 3),
    points: numberRange('bayern points', 0, 30),
    color: text('bayern shirt color', '#fefefe'),
  };
  const manUnitedScore = {
    name: text('manutd name', ManUnited.shortName),
    logo: ManUnited.logo,
    sets: 1,
    points: 19,
    color: '#ee0000',
  };
  return <Scoreboard homeTeam={bayernScore} awayTeam={manUnitedScore} showColors showLogos />;
});
