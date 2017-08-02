import React from 'react';
import styled from 'styled-components';
import { gql, graphql } from 'react-apollo';
import color from '../../../libs/color';

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  color: ${color.white};
  background-color: ${color.darkBlue};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

export function NewSetButton(props: { setNumber: number, matchId: String, mutate: Function }) {
  return (
    <Container>
      <Button
        onClick={() =>
          props.mutate({
            variables: {
              matchId: props.matchId,
              startTime: new Date().toISOString(),
              setNumber: props.setNumber,
            },
          })}
      >
        Start New Set
      </Button>
    </Container>
  );
}

const startNewSetMutation = gql`
  mutation StartNewSet($matchId: ID!, $startTime: DateTime!, $setNumber: Int!) {
    createSet(
      matchId: $matchId
      setNumber: $setNumber
      startTime: $startTime
      homeScore: 0
      awayScore: 0
    ) {
      id
      setNumber
      homeScore
      awayScore
      startTime
    }
  }
`;

export default graphql(startNewSetMutation)(NewSetButton);
