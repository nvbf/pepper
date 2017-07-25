import React from 'react';
import ApolloScoreboard from './scoreboard/ApolloScoreboard';
import MobxPlayerList from './playerlist/PlayerList';

function ComponentFinder(props: { component: any }) {
  console.log(props);
  if (!props.component) {
    return null;
  }
  switch (props.component.componentName) {
    case 'Scoreboard':
      console.log('YES');
      return <ApolloScoreboard position={props.component.position} />;
    case 'PlayerList':
      return <MobxPlayerList position={props.component.position} />;
    default:
      console.log('returning null');
      return null;
  }
}

export default ComponentFinder;
