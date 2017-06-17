// @flow
import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.active ? color.white : color.extraLightGrey)};
`;

const Number = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-left: 16px;
  background-color: ${props => (props.active ? color.yellow : color.lightGray)};
  color: ${color.white};
  line-height: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: 200;
`;

const Name = styled.h4`
  color: ${props => (props.active ? color.black : color.lightGray)};
  margin-left: 16px;
  font-size: 20px;
  font-weight: 200;
`;

const Position = styled.div`
  color: ${props => (props.active ? color.black : color.lightGray)};
  margin-left: auto;
  margin-right: 16px;
`;

function PlayerLine(props: { player: any, active: boolean }) {
  return (
    <Container active={props.active}>
      <Number active={props.active}>{props.player.number}</Number>
      <Name active={props.active}>{props.player.name}</Name>
      <Position active={props.active}>{props.player.position}</Position>
    </Container>
  );
}

export default PlayerLine;
