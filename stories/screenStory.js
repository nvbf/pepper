import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Screen from '../components/Screen';
import PlayerList from '../components/playerlist/PlayerList';

import { Bayern } from '../mocks/teams';
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
const TopMiddle = <TestComponent background="yellowgreen">TopMiddle</TestComponent>;
const TopRight = <TestComponent background="lightblue">Blue</TestComponent>;
const Main = <TestComponent background="lightgray" height={900} width={1920}>Main</TestComponent>;

screenStory.add('normal', () => (
  <Screen topLeft={TopLeft} topMiddle={TopMiddle} topRight={TopRight} main={Main} />
));

const GreenMain = (
  <TestComponent background="yellowgreen" height={900} width={1920}>
    <PlayerList team={Bayern} />
  </TestComponent>
);

screenStory.add('playerList 1080p', () => (
  <Screen
    size="1080p"
    topLeft={TopLeft}
    topMiddle={TopMiddle}
    topRight={TopRight}
    main={GreenMain}
  />
));
