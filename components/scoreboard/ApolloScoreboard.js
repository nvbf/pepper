import { gql, graphql } from 'react-apollo';
import Scoreboard from './Scoreboard';
import {
  getAwayTeamSets,
  getHomeTeamSets,
  getHomeTeamPoints,
  getAwayTeamPoints,
} from './scoreExtractor';

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
        number
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
      points: getHomeTeamPoints(Match.sets),
      sets: getHomeTeamSets(Match.sets),
    },
    awayTeam: {
      name: Match.awayTeam.shortName,
      logo: '',
      color: Match.homeTeam.color,
      points: getAwayTeamPoints(Match.sets),
      sets: getAwayTeamSets(Match.sets),
    },
  }),
};

export default graphql(FETCH_SCORE_QUERY, config)(Scoreboard);
