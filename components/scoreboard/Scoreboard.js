import React from 'react';
import styled from 'styled-components';
import TeamRow from './TeamRow';

const Container = styled.div`
  box-sizing: content-box;
  margin-top: 16px;
  margin-left: 16px;
  padding: 6px 8px;
  width: 300px;
  height: 74px;
  border: 1px solid #111;
  border-radius: 3px;
  background-color: #666;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
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
      <TeamRow
        name={props.homeTeam.name}
        points={props.homeTeam.points}
        sets={props.homeTeam.sets}
        logo={props.homeTeam.logo}
        color={props.homeTeam.color}
        showLogos={props.showLogos}
        showColor={props.showColors}
      />
      <TeamRow
        name={props.awayTeam.name}
        points={props.awayTeam.points}
        sets={props.awayTeam.sets}
        logo={props.awayTeam.logo}
        color={props.awayTeam.color}
        showLogos={props.showLogos}
        showColor={props.showColors}
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
