import React from 'react';
import styled from 'styled-components';
import TeamRow from './TeamRow';
import color from '../../libs/color';

const boardColors = {
  nameBottom: color.lightGray,
  nameTop: color.white,
  setsBottom: color.yellow,
  setsTop: color.darkYellow,
  pointsBottom: color.darkBlue,
  pointsTop: color.blue,
  pointsText: color.white,
};

const Container = styled.div`
  box-sizing: content-box;
  margin-top: 16px;
  margin-left: 16px;
  width: 330px;
  height: 100px;
  color: white;
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro', sans-serif;
  border-radius: 5px;
`;

const TeamRowContainer = styled.div`
  background: linear-gradient(${boardColors.nameTop}, ${boardColors.nameBottom});
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SetsContainer = styled.div`
  background: linear-gradient(${boardColors.setsTop}, ${boardColors.setsBottom});
  width: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${color.darkBlue};
`;

const SetScore = styled.span`
  font-size: 24px;
  height: 40px;
  line-height: 40px;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
`;

export type Gradient = {
  start: string,
  stop: string,
};

function GradientFill(props: Gradient) {
  return (
    <linearGradient id={props.id} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: props.start, stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: props.stop, stopOpacity: 1 }} />
    </linearGradient>
  );
}

function GradientTriangle(
  props: { leftGradient: Gradient, rightGradient: Gradient, width: number, height: number },
) {
  return (
    <svg
      shapeRendering="optimizeQuality"
      width={props.width}
      height="100px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <GradientFill
          start={props.leftGradient.start}
          stop={props.leftGradient.stop}
          id="leftGrad"
        />
        <GradientFill
          start={props.rightGradient.start}
          stop={props.rightGradient.stop}
          id="rightGrad"
        />
      </defs>
      <polygon
        shapeRendering="optimizeQuality"
        points={`0,${props.height} 0,0 ${props.width},0`}
        fill="url(#leftGrad)"
      />
      <polygon
        shapeRendering="optimizeQuality"
        points={`0,${props.height} ${props.width},${props.height} ${props.width},0`}
        fill="url(#rightGrad)"
      />
    </svg>
  );
}

const PointsContainer = styled.div`
  background: linear-gradient(${boardColors.pointsTop}, ${boardColors.pointsBottom});
  width: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Points = styled.span`
  text-shadow: 1px 1px ${color.black};
  color: ${boardColors.points};
  font-size: 24px;
  height: 40px;
  line-height: 40px;
  margin-left: ${props => (props.offset ? '-16px' : '4px')};
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
};

export function Scoreboard(props: ScoreboardProps) {
  return (
    <Container>
      <TeamRowContainer>
        <TeamRow
          name={props.homeTeam.name}
          logo={props.homeTeam.logo}
          color={props.homeTeam.color}
          showLogo={props.showLogos}
          showColor={props.showColors}
        />
        <TeamRow
          name={props.awayTeam.name}
          logo={props.awayTeam.logo}
          color={props.awayTeam.color}
          showLogo={props.showLogos}
          showColor={props.showColors}
        />
      </TeamRowContainer>
      <GradientTriangle
        leftGradient={{ start: boardColors.nameTop, stop: boardColors.nameBottom }}
        rightGradient={{ start: boardColors.setsTop, stop: boardColors.setsBottom }}
        width={30}
        height={100}
      />
      <SetsContainer>
        <SetScore>{props.homeTeam.sets}</SetScore>
        <SetScore offset>{props.awayTeam.sets}</SetScore>
      </SetsContainer>
      <GradientTriangle
        leftGradient={{ start: boardColors.setsTop, stop: boardColors.setsBottom }}
        rightGradient={{ start: boardColors.pointsTop, stop: boardColors.pointsBottom }}
        width={30}
        height={100}
      />

      <PointsContainer>
        <Points>{props.homeTeam.points}</Points>
        <Points offset>{props.awayTeam.points}</Points>
      </PointsContainer>
      <GradientTriangle
        leftGradient={{ start: boardColors.pointsTop, stop: boardColors.pointsBottom }}
        rightGradient={{ start: 'transparent', stop: 'transparent' }}
        width={30}
        height={100}
      />
    </Container>
  );
}

Scoreboard.defaultProps = {
  homeTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '',
  },
  awayTeam: {
    name: '',
    points: 0,
    sets: 0,
    logo: '',
    color: '',
  },
};

export default Scoreboard;
