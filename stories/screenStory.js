import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Screen from '../components/Screen';
import PlayerList from '../components/playerlist/PlayerList';
import Scoreboard from '../components/scoreboard/Scoreboard';
import Lineup from '../components/lineup/Lineup';

import { Bayern, ManUnited } from '../mocks/teams';
const screenStory = storiesOf('Screen', module);

const TestComponent = styled.div`
  width: ${props => props.width || 645}px;
  height: ${props => props.height || 180}px;
  background: ${props => props.background || 'blue'};
  font-size: 26px;
  font-family: 'Helvetica', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopLeft = <TestComponent background="tomato">TopLeft</TestComponent>;
const TopMiddle = <TestComponent background="transparent">TopMiddle</TestComponent>;
const TopRight = <TestComponent background="transparent">Blue</TestComponent>;
const Main = <TestComponent background="lightgray" height={900} width={1920}>Main</TestComponent>;

screenStory.add('normal', () => (
  <Screen topLeft={TopLeft} topMiddle={TopMiddle} topRight={TopRight} main={Main} />
));

const PlayerListMain = (
  <TestComponent background="transparent" height={900} width={1920}>
    <PlayerList team={Bayern} />
  </TestComponent>
);

const LineupMain = (
  <TestComponent background="transparent" height={900} width={1920}>
    <Lineup />
  </TestComponent>
);

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
const Score = <Scoreboard homeTeam={bayernScore} awayTeam={manUnitedScore} showColors showLogos />;

screenStory.add('playerList 1080p with scoreboard', () => (
  <Screen
    size="1080p"
    topLeft={Score}
    topMiddle={TopMiddle}
    topRight={TopRight}
    main={PlayerListMain}
  />
));

screenStory.add('lineup and scoreboard', () => (
  <Screen
    size="1080p"
    topLeft={Score}
    topMiddle={TopMiddle}
    topRight={TopRight}
    main={LineupMain}
  />
));
