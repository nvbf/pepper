import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import TableHeadEdit from './TableHeadEdit';
import PlayerLineEdit from './PlayerLineEdit';
import TableSubHeader from './TableSubHeader';
import color from '../../../libs/color';
import type { Team } from '../../../types/types';

const Container = styled.div`
  margin: 16px;
  width: 800px;
  min-height: 350px;
  background-color: blue;
  border-radius: 6px;
  background-color: ${color.white};
  box-shadow: 0px 2px 6px ${transparentize(0.8, color.seaBlue)};
`;

function PlayerDataEdit(props: { team: Team }) {
  return (
    <Container>
      <TableHeadEdit logo={props.team.logo} name={props.team.shortName} />
      <TableSubHeader />
      {props.team.players.map(player => <PlayerLineEdit player={player} />)}
    </Container>
  );
}

export default PlayerDataEdit;
