import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Scoreboard from '../components/scoreboard/Scoreboard';
import { Bayern, ManUnited } from '../mocks/teams';

const scoreboardStory = storiesOf('Scoreboard', module);

const bayernScore = {
  name: Bayern.shortName,
  logo: Bayern.logo,
  sets: 2,
  points: 21,
  color: '#fefefe',
};
const manUnitedScore = {
  name: ManUnited.shortName,
  logo: ManUnited.logo,
  sets: 1,
  points: 19,
  color: '#ee0000',
};

scoreboardStory.add('with two teams', () => (
  <Scoreboard homeTeam={bayernScore} awayTeam={manUnitedScore} showColors showLogos />
));
