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

const SETS_SUBSCRIPTION = gql`
  subscription SubscribeOnSets($matchId: ID!) {
    Set(filter: { mutation_in: [CREATED, UPDATED, DELETED], node: { match: { id: $matchId } } }) {
      node {
        id
        startTime
        homeScore
        awayScore
        number
      }
    }
  }
`;

const config = {
  options: props => ({
    variables: {
      matchId: props.matchId,
    },
  }),
  props: ({ ownProps, data: { Match, subscribeToMore } }) => ({
    subscribeToSetData: () =>
      subscribeToMore({
        document: SETS_SUBSCRIPTION,
        variables: {
          matchId: ownProps.matchId,
        },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev;
          }
          const newSet = subscriptionData.data.Set.node;
          const allSetsButNew = prev.Match.sets.filter(set => set.number !== newSet.number);

          return {
            ...prev,
            Match: {
              ...prev.Match,
              sets: allSetsButNew.concat(newSet),
            },
          };
        },
      }),
    isShowing: ownProps.isShowing,
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
