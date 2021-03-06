import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import TeamRow from './TeamRow';
import color from '../../libs/color';
import OpacityContainer from '../OpacityContainer';

const boardColors = {
  nameBottom: darken(0.8, color.white),
  nameTop: darken(0.6, color.white),
  nameText: color.white,
  setsBottom: color.white,
  setsTop: color.lightGray,
  pointsBottom: color.darkBlue,
  pointsTop: color.blue,
  pointsText: color.white,
};

const Container = styled.div`
  box-sizing: content-box;
  margin-top: 16px;
  margin-left: 16px;
  width: 400px;
  height: 100px;
  color: white;
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 5px;
  overflow: hidden;
`;

const TeamRowContainer = styled.div`
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  padding: 0px 36px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SetsContainer = styled.div`
  background: linear-gradient(${boardColors.setsTop}, ${boardColors.setsBottom});
  width: 48px;
  height: 120%;
  display: flex;
  margin-top: -8px;
  margin-left: -12px;
  transform: rotate(12deg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.darkBlue};
`;

const SetScore = styled.span`
  font-size: 24px;
  height: 50px;
  line-height: 50px;
  transform: rotate(-12deg);
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
`;

const PointsContainer = styled.div`
  background: linear-gradient(${boardColors.pointsTop}, ${boardColors.pointsBottom});
  width: 64px;
  height: 100%;
  height: 120%;
  display: flex;
  margin-top: -8px;
  transform: rotate(12deg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Points = styled.span`
  text-shadow: 1px 1px ${color.black};
  color: ${boardColors.points};
  font-size: 24px;
  transform: rotate(-12deg);
  height: 50px;
  line-height: 50px;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
`;

const Dangle = styled.div`
  width: 8px;
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  transform: rotate(12deg);
  height: 120%;
  margin-top: -4px;
  margin-left: -1px;
`;

export type TeamPoints = {
  name: string,
  points: number,
  sets: number,
  logo: string,
  color: string,
};

export type ScoreboardProps = {
  homeTeam: TeamPoints,
  awayTeam: TeamPoints,
  showLogos: boolean,
  showColors: boolean,
  isShowing: boolean,
  subscribeToSetData: Function,
};

export default class Scoreboard extends React.Component {
  componentDidMount() {
    /* this.props.subscribeToSetData(); */
  }

  props: ScoreboardProps;

  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <OpacityContainer isShowing={this.props.isShowing}>
        <Container>
          <TeamRowContainer>
            <TeamRow
              name={this.props.homeTeam.name}
              logo={this.props.homeTeam.logo}
              color={this.props.homeTeam.color}
              showLogo={this.props.showLogos}
              showColor={this.props.showColors}
              textColor={boardColors.nameText}
            />
            <TeamRow
              name={this.props.awayTeam.name}
              logo={this.props.awayTeam.logo}
              color={this.props.awayTeam.color}
              showLogo={this.props.showLogos}
              showColor={this.props.showColors}
              textColor={boardColors.nameText}
            />
          </TeamRowContainer>
          <SetsContainer>
            <SetScore>{this.props.homeTeam.sets}</SetScore>
            <SetScore>{this.props.awayTeam.sets}</SetScore>
          </SetsContainer>
          <PointsContainer>
            <Points>{this.props.homeTeam.points}</Points>
            <Points>{this.props.awayTeam.points}</Points>
          </PointsContainer>
          <Dangle />
        </Container>
      </OpacityContainer>
    );
  }
}

Scoreboard.defaultProps = {
  homeTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '#ff0000',
  },
  awayTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '#ff0000',
  },
};
