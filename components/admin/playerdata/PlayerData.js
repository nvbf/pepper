import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
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

function PlayerData(props: { team: Team, activePlayers: Array<number> }) {
  return (
    <Container>
      <TableHead logo={props.team.logo} name={props.team.shortName} />
      {props.team.players.map(player =>
        <PlayerLine player={player} active={props.activePlayers.includes(player.number)} />,
      )}
    </Container>
  );
}

export default PlayerData;
