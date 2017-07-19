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
  data: { loading: boolean, error: boolean, allTeams: Array<any> },
  team: Team,
  activePlayers: Array<number>,
}) {
  console.log(props);
  if (props.data.error) {
    console.log(props.data.error);
    return <div>Error</div>;
  }
  if (props.data.loading) {
    return <div>Loading</div>;
  }
  return (
    <Container>
      <TableHead logo={props.team.logo} name={props.data.allTeams[0].shortName} />
      {props.data.allTeams[0].players.map(player =>
        <PlayerLine player={player} active={props.activePlayers.includes(player.number)} />,
      )}
    </Container>
  );
}

const allTeams = gql`
  query Team {
    allTeams {
      id
      name
      shortName
      players {
        name
      }
    }
  }
`;

PlayerData.defaultProps = {
  activePlayers: [],
};

export default graphql(allTeams, {
  options: { variables: { shortName: 'BAYERN' } },
})(PlayerData);
