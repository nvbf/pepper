import { gql, graphql } from 'react-apollo';
import ScoreControl from './ScoreControl';

const MATCH_QUERY = gql`
  query GetMatch($matchId: ID!) {
    Match(id: $matchId) {
      id
      homeTeam {
        id
        shortName
        logo
      }
      awayTeam {
        id
        shortName
        logo
      }
      sets {
        id
        setNumber
        homeScore
        awayScore
      }
    }
  }
`;

const SETS_SUBSCRIPTION = gql`
  subscription SubscribeOnSets($matchId: ID!) {
    Set(filter: { mutation_in: [CREATED, DELETED], node: { match: { id: $matchId } } }) {
      node {
        id
        startTime
        homeScore
        awayScore
        setNumber
      }
    }
  }
`;

export default graphql(MATCH_QUERY, {
  options: props => ({
    variables: { matchId: props.matchId },
  }),
  props: ({ ownProps, data }) => ({
    subscribeToSetData: () =>
      data.subscribeToMore({
        document: SETS_SUBSCRIPTION,
        variables: {
          matchId: ownProps.matchId,
        },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev;
          }
          const newSet = subscriptionData.data.Set.node;
          const allSetsButNew = prev.Match.sets.filter(set => set.setNumber !== newSet.setNumber);

          return {
            ...prev,
            Match: {
              ...prev.Match,
              sets: allSetsButNew.concat(newSet),
            },
          };
        },
      }),
    matchId: data.Match.id,
    homeTeam: data.Match.homeTeam,
    awayTeam: data.Match.awayTeam,
    sets: data.Match.sets,
    loading: data.loading,
    error: data.error,
  }),
})(ScoreControl);
