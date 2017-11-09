import { gql, graphql } from 'react-apollo';
import Scoreboard from './Scoreboard';

const FETCH_SCORE_QUERY = gql`
  query fetchDataVolleyScore($matchId: Int!) {
    getFullMatchInfo(matchId: $matchId) {
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
  props: ({ ownProps, data: { getFullMatchInfo } }) => ({
    isShowing: true,
    showLogos: false,
    showColors: false,
    subscribeToSetData: () => {
        console.warn('skipping this for now');
    },
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
  }),
};

export default graphql(FETCH_SCORE_QUERY, config)(Scoreboard);
