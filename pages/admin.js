import React from 'react';
import { injectGlobal } from 'styled-components';
import withData from '../libs/withData';
import PlayerData from '../components/admin/playerdata/PlayerData';
import { ManUnited } from '../mocks/teams';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

function AdminPage() {
  return (
    <div>
      <PlayerData team={ManUnited} />
    </div>
  );
}

export default withData(AdminPage);
