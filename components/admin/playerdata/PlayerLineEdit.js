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
  justify-content: space-between;
  background-color: ${color.white};
`;

const RightContainer = styled.div`
  margin-right: 16px;
`;

const TextInput = styled.input`
  margin-left: 16px;
  letter-spacing: 0.5px;
  background-color: ${color.lightBlue};
  border-radius: 3px;
  border: 1px solid ${color.extraLightGrey};
  padding: 8px;
  font-size: 20px;
  font-weight: 200;
  color: ${color.seaBlue};
  width: ${props => props.width || 24}px;
`;

export default function PlayerLineEdit(props: { player: any, active: boolean }) {
  return (
    <Container active={props.active}>
      <div>
        <TextInput value={props.player.number} />
        <TextInput width={200} value={props.player.name} />
        <TextInput width={120} value={props.player.position} />
      </div>
      <RightContainer>
        <TextInput width={34} value={props.player.reach} />
        <TextInput width={34} value={props.player.blockReach} />
        <TextInput width={34} value={props.player.height} />
      </RightContainer>
    </Container>
  );
}
