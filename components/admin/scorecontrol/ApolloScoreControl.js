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

export default graphql(MATCH_QUERY, {
  options: { variables: { matchId: 'cj5jb3dhib2o101599yo4827f' } },
  props: ({ data }) => ({
    matchId: data.Match.id,
    homeTeam: data.Match.homeTeam,
    awayTeam: data.Match.awayTeam,
    sets: data.Match.sets,
    loading: data.loading,
    error: data.error,
  }),
})(ScoreControl);
