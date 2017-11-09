// @flow
import React from 'react';
import withData from '../libs/withData';
import DataVolleyScoreBoard from '../components/scoreboard/DataVolleyScoreboard';


function DataVolleyScoreBoardPage() {
  return (
    <div>
      <DataVolleyScoreBoard matchId={1111} />
    </div>
  );
}

export default withData(DataVolleyScoreBoardPage);
