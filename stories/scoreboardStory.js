import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
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
    sets: numberRange('manutd sets', 0, 3),
    points: numberRange('manutd points', 0, 30),
    color: text('manutd shirt color', '#ee0000'),
  };
  return (
    <Scoreboard
      subscribeToSetData={() => null}
      homeTeam={bayernScore}
      awayTeam={manUnitedScore}
      showColors
      showLogos
      isShowing
    />
  );
});
