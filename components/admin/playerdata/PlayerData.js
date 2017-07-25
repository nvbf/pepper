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

class PlayerData extends React.Component {
  props: {
    data: { loading: boolean, error: boolean, Team: Array<any> },
    team: Team,
  };

  render() {
    if (this.props.data.error) {
      return <div>Error</div>;
    }
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }
    return (
      <Container>
        <TableHead logo={this.props.team.logo} name={this.props.data.Team.shortName} />
        {this.props.data.Team.players.map(player => <PlayerLine key={player.id} player={player} />)}
      </Container>
    );
  }
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

PlayerData.defaultProps = {
  activePlayers: [],
};

export default graphql(PLAYERS_FROM_TEAM_QUERY, {
  options: { variables: { slug: 'ntnui' } },
})(PlayerData);
