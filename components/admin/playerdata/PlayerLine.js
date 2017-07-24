// @flow
import React from 'react';
import styled from 'styled-components';
import { gql, graphql } from 'react-apollo';
import color from '../../../libs/color';

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.active ? color.white : color.extraLightGrey)};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    background-color: ${color.extraLightGrey};
  }
`;

const PlayerNumber = styled.div`
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

function PlayerLine(props: { player: any, active: boolean, toggleActive: Function }) {
  return (
    <Container
      active={props.player.active}
      onClick={() =>
        props.toggleActive({
          variables: {
            id: props.player.id,
            active: !props.player.active,
          },
        })}
    >
      <PlayerNumber active={props.player.active}>
        {props.player.number}
      </PlayerNumber>
      <Name active={props.player.active}>
        {props.player.name}
      </Name>
      <Position active={props.player.active}>
        {props.player.position}
      </Position>
    </Container>
  );
}

const TOGGLE_ACTIVE_MUTATION = gql`
  mutation UpdatePlayerActive($id: ID!, $active: Boolean) {
    updatePlayer(id: $id, active: $active) {
      id
      name
      active
    }
  }
`;

export default graphql(TOGGLE_ACTIVE_MUTATION, { name: 'toggleActive' })(PlayerLine);
