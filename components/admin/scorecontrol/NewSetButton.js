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
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 4px;
  color: ${color.white};
  background-color: ${color.darkBlue};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

export function NewSetButton(props: { startNewSet: Function }) {
  return (
    <Container>
      <Button onClick={props.startNewSet}>Start New Set</Button>
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
    }
  }
`;

export default graphql(startNewSetMutation, {
  props: ({ mutate, ownProps }) => ({
    startNewSet: () =>
      mutate({
        variables: {
          matchId: ownProps.matchId,
          startTime: new Date().toISOString(),
          setNumber: ownProps.setNumber,
        },
      }),
  }),
})(NewSetButton);
