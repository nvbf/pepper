import React from 'react';
import Scoreboard from './scoreboard/Scoreboard';
import PlayerList from './playerlist/PlayerList';

function ComponentFinder(props: { component: any }) {
  switch (props.component.id) {
    case 'Scoreboard':
      return <Scoreboard position={props.component.position} />;
    case 'PlayerList':
      return <PlayerList position={props.component.position} />;
  }
  return null;
}

export default ComponentFinder;
