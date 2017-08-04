import React from 'react';
import ApolloScoreboard from './scoreboard/ApolloScoreboard';
import ApolloPlayerList from './playerlist/ApolloPlayerList';

function ComponentFinder(props: { component: any, matchId: String }) {
  if (!props.component) {
    return null;
  }
  switch (props.component.componentName) {
    case 'Scoreboard':
      return <ApolloScoreboard {...props.component} matchId={props.matchId} />;
    case 'HomeTeamPlayerList':
      return <ApolloPlayerList {...props.component} matchId={props.matchId} team="homeTeam" />;
    case 'AwayTeamPlayerList':
      return <ApolloPlayerList {...props.component} matchId={props.matchId} team="awayTeam" />;
    default:
      return null;
  }
}

export default ComponentFinder;
