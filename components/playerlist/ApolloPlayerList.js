import { gql, graphql } from 'react-apollo';
import PlayerList from './PlayerList';

const TEAM_QUERY = gql`
  query GetTeam($matchId: ID!) {
    Match(id: $matchId) {
      id
      homeTeam {
        id
        name
        logo
        players(filter: { active: true }) {
          id
          name
          number
          height
          position
        }
      }
      awayTeam {
        id
        name
        logo
        players(filter: { active: true }) {
          id
          name
          number
          height
          position
        }
      }
    }
  }
`;

export default graphql(TEAM_QUERY, {
  options: props => ({
    variables: { matchId: props.matchId },
  }),
  props: ({ ownProps, data: { Match, loading } }) => ({
    isShowing: ownProps.isShowing,
    team: Match[ownProps.team],
    loading,
  }),
})(PlayerList);
