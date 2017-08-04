import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import withData from '../libs/withData';
import PlayerData from '../components/admin/playerdata/PlayerData';
import ScoreControl from '../components/admin/scorecontrol/ApolloScoreControl';
import ShowButton from '../components/admin/showbutton/ShowButton';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fafafa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

function AdminPage() {
  const matchId = 'cj5jb3dhib2o101599yo4827f';
  return (
    <Container>
      <ControlContainer>
        <ShowButton overlayId="cj5jay5bn7ygz0161ikdw1l2o" text="Scoreboard" />
        <ScoreControl matchId={matchId} />
      </ControlContainer>
      <ControlContainer>
        <ShowButton overlayId="cj5krag1g1jev01939e6pv7kw" text="Home-Team PlayerList" />
        <PlayerData team="homeTeam" matchId={matchId} />
      </ControlContainer>
      <ControlContainer>
        <ShowButton overlayId="cj5xo6ust6z7c0120mne5zql9" text="Away-Team PlayerList" />
        <PlayerData team="awayTeam" matchId={matchId} />
      </ControlContainer>
    </Container>
  );
}

export default withData(AdminPage);
