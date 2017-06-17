import React from 'react';
import MobxScoreboard from './scoreboard/Scoreboard';
import MobxPlayerList from './playerlist/PlayerList';

function ComponentFinder(props: { component: any }) {
  switch (props.component.id) {
    case 'Scoreboard':
      return <MobxScoreboard position={props.component.position} />;
    case 'PlayerList':
      return <MobxPlayerList position={props.component.position} />;
    default:
      return null;
  }
}

export default ComponentFinder;
