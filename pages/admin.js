import React from 'react';
import { injectGlobal } from 'styled-components';
import withData from '../libs/withData';
import PlayerData from '../components/admin/playerdata/PlayerData';
import ScoreControl from '../components/admin/scorecontrol/ApolloScoreControl';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

function AdminPage() {
  return (
    <div>
      <PlayerData />
      <ScoreControl matchId="cj5jb3dhib2o101599yo4827f" />
    </div>
  );
}

export default withData(AdminPage);
