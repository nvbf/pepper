import { gql, graphql } from 'react-apollo';
import Scoreboard from './Scoreboard';

const matchId = 'cj5jb3dhib2o101599yo4827f';

const FETCH_SCORE_QUERY = gql`
  query FetchScoreQuery($matchId: ID!) {
    Match(id: $matchId) {
      id
      homeTeam {
        id
        shortName
        color
      }
      awayTeam {
        id
        shortName
        color
      }
      sets {
        startTime
        homeScore
        awayScore
        setNumber
      }
    }
  }
`;

const config = {
  options: { variables: { matchId: 'cj5jb3dhib2o101599yo4827f' } },
  props: ({ ownProps, data: { Match } }) => ({
    isShowing: true,
    showLogos: false,
    showColors: true,
    homeTeam: {
      name: Match.homeTeam.shortName,
      logo: '',
      color: Match.homeTeam.color,
      // points: getHomeTeamPoints(sets),
      // sets: getAwayTeamSets(sets),
      points: 2,
      sets: 1,
    },
    awayTeam: {
      name: Match.awayTeam.shortName,
      logo: '',
      color: Match.homeTeam.color,
      // points: getAwayTeamPoints(sets),
      // sets: getAwayTeamSets(sets),
      points: 10,
      sets: 2,
    },
  }),
};

export default graphql(FETCH_SCORE_QUERY, config)(Scoreboard);

/*
export default inject((stores, props) => {
  const uiStore = stores.uiStore[props.position];
  return {
    isShowing: uiStore.isShowing,
    showLogos: uiStore.showLogos,
    showColors: uiStore.showColors,
    homeTeam: {
      name: stores.homeTeamStore.shortName,
      logo: stores.homeTeamStore.logo,
      color: stores.homeTeamStore.color,
      points: stores.scoreStore.currentPoints.homeTeam,
      sets: stores.scoreStore.currentSets.homeTeam,
    },
    awayTeam: {
      name: stores.awayTeamStore.shortName,
      logo: stores.awayTeamStore.logo,
      color: stores.awayTeamStore.color,
      points: stores.scoreStore.currentPoints.awayTeam,
      sets: stores.scoreStore.currentSets.awayTeam,
    },
  };
})(observer(Scoreboard));
*/
