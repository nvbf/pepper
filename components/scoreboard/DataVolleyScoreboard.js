import { gql, graphql } from 'react-apollo';

import Scoreboard from './Scoreboard';

const FETCH_SCORE_QUERY = gql`
  query fetchDataVolleyScore($matchId: Int!) {
    getFullMatchInfo(matchId: $matchId) {
      matchID
      currentSet,
      currentSetScoreHomeTeam,
      currentSetScoreGuestTeam,   
      homeTeamName,
      guestTeamName,
      setWonHomeTeam,
      setWonGuestTeam,
    }
  }
`;


const config = {
  options: props => ({
    variables: {
      matchId: props.matchId,
    },
  }),
  props: ({ ownProps, data: { getFullMatchInfo } }) => {
    if (!getFullMatchInfo) {
      return { error: 'match not found' };
    }
    return {
      isShowing: true,
      showLogos: false,
      showColors: false,
      //TODO: this is a stupid thing to do on the client! Would force alot fo API lookups we do not want
      subscribeToSetData: () => { console.log('skipping') }, //() => setTimeout(() => data.refech({ matchId: getFullMatchInfo.matchID}), 3000),
      homeTeam: {
        name: getFullMatchInfo.homeTeamName,
        logo: '',
        color: '',
        points: getFullMatchInfo.currentSetScoreHomeTeam,
        sets: getFullMatchInfo.setWonHomeTeam,
      },
      awayTeam: {
        name: getFullMatchInfo.guestTeamName,
        logo: '',
        color: '',
        points: getFullMatchInfo.currentSetScoreGuestTeam,
        sets: getFullMatchInfo.setWonGuestTeam,
      },
    };
  },
};

export default graphql(FETCH_SCORE_QUERY, config)(Scoreboard);
