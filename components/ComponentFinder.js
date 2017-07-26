import React from 'react';
import ApolloScoreboard from './scoreboard/ApolloScoreboard';
import MobxPlayerList from './playerlist/PlayerList';

function ComponentFinder(props: { component: any, matchId: String }) {
  if (!props.component) {
    return null;
  }
  switch (props.component.componentName) {
    case 'Scoreboard':
      return <ApolloScoreboard {...props.component} matchId={props.matchId} />;
    case 'PlayerList':
      return <MobxPlayerList position={props.component.position} />;
    default:
      return null;
  }
}

export default ComponentFinder;
