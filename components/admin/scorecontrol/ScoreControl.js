import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import type { Team } from '../../../types/types';
import color from '../../../libs/color';
import { getLastSet, isSetFinished } from '../../../libs/setUtils';
import SetRow from './SetRow';
import CurrentSetRow from './CurrentSetRow';
import NewSetButton from './NewSetButton';

const Container = styled.div`
  display: block;
  width: 400px;
  overflow: auto;
  border-radius: 6px;
  background-color: green;
  background-color: ${color.white};
  box-shadow: 0px 2px 6px ${transparentize(0.8, color.seaBlue)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 0%;
`;

const SetHeader = styled.div`
  width: 64px;
  text-align: center;
`;

const TopRow = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const NameAndLogo = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const Logo = styled.img`
  height: 24px;
  margin-right: 8px;
`;

const Content = styled.div`z-index: 2;`;

const GreyBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 96px;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: ${color.extraLightGrey};
`;

type VolleySet = {
  homeScore: number,
  awayScore: number,
  setNumber: number,
};

type ScoreControlProps = {
  matchId: String,
  loading: boolean,
  error: boolean,
  homeTeam: Team,
  awayTeam: Team,
  sets: Array<VolleySet>,
  subscribeToSetData: Function,
};

class ScoreControl extends React.Component {
  componentDidMount() {
    this.props.subscribeToSetData();
  }

  props: ScoreControlProps;

  render() {
    if (this.props.loading || this.props.error) {
      return null;
    }
    const currentSet = getLastSet(this.props.sets);
    const setIsFinished = isSetFinished(currentSet);
    return (
      <Container>
        <GreyBackground />
        <Content>
          <TopRow>
            <SetHeader>SET</SetHeader>
            <NameAndLogo>
              <Logo src={this.props.homeTeam.logo} />
              {this.props.homeTeam.shortName}
            </NameAndLogo>
            <NameAndLogo>
              <Logo src={this.props.awayTeam.logo} />
              {this.props.awayTeam.shortName}
            </NameAndLogo>
          </TopRow>

          {this.props.sets.map(
            set =>
              set.setNumber === currentSet.setNumber
                ? <CurrentSetRow
                  id={set.id}
                  key={set.setNumber}
                  setNumber={set.setNumber}
                  homeScore={set.homeScore}
                  awayScore={set.awayScore}
                />
                : <SetRow
                  key={set.setNumber}
                  setNumber={set.setNumber}
                  homeScore={set.homeScore}
                  awayScore={set.awayScore}
                />,
          )}

          {(setIsFinished || currentSet.setNumber === 0) &&
            <NewSetButton setNumber={currentSet.setNumber + 1} matchId={this.props.matchId} />}
        </Content>
      </Container>
    );
  }
}

ScoreControl.defaultProps = {
  sets: [],
};

export default ScoreControl;
