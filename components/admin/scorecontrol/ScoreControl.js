import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import type { Team } from '../../../types/types';

import color from '../../../libs/color';

const Container = styled.div`
  width: 400px;
  border-radius: 6px;
  background-color: green;
  background-color: ${color.white};
  box-shadow: 0px 2px 6px ${transparentize(0.8, color.seaBlue)};
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const SetHeader = styled.div`
  width: 80px;
  text-align: center;
`;

const TopRow = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NameAndLogo = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 24px;
  margin-right: 8px;
`;

const SetRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const SetNumber = styled.div`
  width: 80px;
  text-align: center;
`;

const Score = styled.div`
  width: 120px;
  text-align: center;
`;

const GreyBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 45px;
  height: 300px;
  left: 0;
  top: 0;
  background-color: ${color.extraLightGrey};
`;

type VolleySet = {
  homeScore: number,
  awayScore: number,
  setNumber: number,
};

type ScoreControlProps = {
  homeTeam: Team,
  awayTeam: Team,
  sets: Array<VolleySet>,
};

function ScoreControl(props: ScoreControlProps) {
  return (
    <Container>
      <TopRow>
        <SetHeader>SET</SetHeader>
        <NameAndLogo>
          <Logo src={props.homeTeam.logo} />
          {props.homeTeam.shortName}
        </NameAndLogo>
        <NameAndLogo>
          <Logo src={props.awayTeam.logo} />
          {props.awayTeam.shortName}
        </NameAndLogo>
      </TopRow>

      {props.sets.map(set =>
        (<SetRow>
          <SetNumber>
            {set.setNumber}
          </SetNumber>
          <Score>
            {set.homeScore}
          </Score>
          <Score>
            {set.awayScore}
          </Score>
        </SetRow>),
      )}
    </Container>
  );
}

export default ScoreControl;
