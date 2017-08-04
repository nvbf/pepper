import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import withData from '../libs/withData';
import PlayerData from '../components/admin/playerdata/PlayerData';
import ScoreControl from '../components/admin/scorecontrol/ApolloScoreControl';

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

function AdminPage() {
  const matchId = 'cj5jb3dhib2o101599yo4827f';
  return (
    <Container>
      <ScoreControl matchId={matchId} />
      <PlayerData team="homeTeam" matchId={matchId} />
      <PlayerData team="awayTeam" matchId={matchId} />
    </Container>
  );
}

export default withData(AdminPage);
