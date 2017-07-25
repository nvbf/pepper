import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { gql, graphql } from 'react-apollo';
import TableHead from './TableHead';
import PlayerLine from './PlayerLine';
import color from '../../../libs/color';
import type { Team } from '../../../types/types';

const Container = styled.div`
  margin: 16px;
  width: 400px;
  min-height: 350px;
  background-color: blue;
  border-radius: 6px;
  background-color: ${color.white};
  box-shadow: 0px 2px 6px ${transparentize(0.8, color.seaBlue)};
`;

function PlayerData(props: {
  data: { loading: boolean, error: boolean, Team: Array<any> },
  team: Team,
}) {
  if (props.data.error) {
    return <div>Error</div>;
  }
  if (props.data.loading) {
    return <div>Loading</div>;
  }
  return (
    <Container>
      <TableHead logo={props.team.logo} name={props.data.Team.shortName} />
      {props.data.Team.players.map(player => <PlayerLine key={player.id} player={player} />)}
    </Container>
  );
}

const PLAYERS_FROM_TEAM_QUERY = gql`
  query TeamWithPlayers($slug: String!) {
    Team(slug: $slug) {
      id
      name
      shortName
      players(orderBy: position_ASC) {
        id
        name
        number
        position
        active
      }
    }
  }
`;

export default graphql(PLAYERS_FROM_TEAM_QUERY, {
  options: { variables: { slug: 'ntnui' } },
})(PlayerData);
