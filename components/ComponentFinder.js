import React from 'react';
import ApolloScoreboard from './scoreboard/ApolloScoreboard';
import MobxPlayerList from './playerlist/PlayerList';

function ComponentFinder(props: { component: any }) {
  if (!props.component) {
    return null;
  }
  switch (props.component.componentName) {
    case 'Scoreboard':
      return <ApolloScoreboard position={props.component.position} />;
    case 'PlayerList':
      return <MobxPlayerList position={props.component.position} />;
    default:
      return null;
  }
}

export default ComponentFinder;
