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
          image
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
          image
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
    match: Match,
    teamType: ownProps.team,
    loading,
  }),
})(PlayerList);
