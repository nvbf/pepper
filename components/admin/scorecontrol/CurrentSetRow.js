import React from 'react';
import styled from 'styled-components';
import { gql, graphql } from 'react-apollo';
import color from '../../../libs/color';

const Container = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: ${color.darkBlue};
  padding: 0 16px;
  color: ${color.white};
`;

const SetNumber = styled.div`
  width: 64px;
  text-align: center;
`;

const Score = styled.div`
  width: 120px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ScoreNumber = styled.div`
  width: 48px;
  font-weight: 600;
`;

const Button = styled.button`
  height: 32px;
  width: 32px;
  border: ${props => (props.noBorder ? 'none' : '2px solid white')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.img`
  width: 16px;
  margin-top: ${props => props.marginTop || 0}px;
`;

type CurrentSetProps = {
  setNumber: number,
  homeScore: number,
  awayScore: number,
  decrementHomeTeam: Function,
  incrementHomeTeam: Function,
  decrementAwayTeam: Function,
  incrementAwayTeam: Function,
};

function CurrentSetRow(props: CurrentSetProps) {
  return (
    <Container>
      <SetNumber>
        {props.setNumber}
      </SetNumber>
      <Score>
        <Button noBorder onClick={props.decrementHomeTeam}>
          <Icon marginTop={2} src="/static/icon/chevron-down-white.svg" alt="chevron-down" />
        </Button>
        <ScoreNumber>
          {props.homeScore}
        </ScoreNumber>
        <Button onClick={props.incrementHomeTeam}>
          <Icon src="/static/icon/chevron-up-white.svg" alt="chevron-up" />
        </Button>
      </Score>
      <Score>
        <Button noBorder onClick={props.decrementAwayTeam}>
          <Icon marginTop={2} src="/static/icon/chevron-down-white.svg" alt="chevron-down" />
        </Button>
        <ScoreNumber>
          {props.awayScore}
        </ScoreNumber>
        <Button onClick={props.incrementAwayTeam}>
          <Icon src="/static/icon/chevron-up-white.svg" alt="chevron-up" />
        </Button>
      </Score>
    </Container>
  );
}

const updateSetMutation = gql`
  mutation UpdateSet($setId: ID!, $homeScore: Int, $awayScore: Int) {
    updateSet(id: $setId, homeScore: $homeScore, awayScore: $awayScore) {
      homeScore
      awayScore
      id
      setNumber
    }
  }
`;

export default graphql(updateSetMutation, {
  props: ({ mutate, ownProps }) => {
    const mutateAndUpdate = variables =>
      mutate({
        variables,
        optimisticResponse: {
          __typename: 'Mutation',
          updateSet: {
            __typename: 'Set',
            id: variables.setId,
            setNumber: ownProps.setNumber,
            homeScore: variables.homeScore || ownProps.homeScore,
            awayScore: variables.awayScore || ownProps.awayScore,
          },
        },
      });
    return {
      decrementHomeTeam: () =>
        mutateAndUpdate({
          setId: ownProps.id,
          homeScore: ownProps.homeScore - 1,
        }),
      incrementHomeTeam: () =>
        mutateAndUpdate({
          setId: ownProps.id,
          homeScore: ownProps.homeScore + 1,
        }),
      decrementAwayTeam: () =>
        mutateAndUpdate({
          setId: ownProps.id,
          awayScore: ownProps.awayScore - 1,
        }),
      incrementAwayTeam: () =>
        mutateAndUpdate({
          setId: ownProps.id,
          awayScore: ownProps.awayScore + 1,
        }),
    };
  },
})(CurrentSetRow);
