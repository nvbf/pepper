import { gql, graphql } from 'react-apollo';
import PlayerList from './PlayerList';

const TEAM_QUERY = gql`
  query GetTeam($teamSlug: String!) {
    Team(slug: $teamSlug) {
      name
      logo
      players {
        name
        number
        height
        position
      }
    }
  }
`;

export default graphql(TEAM_QUERY, {
  options: {
    variables: { teamSlug: 'tvn' },
  },
  props: ({ ownProps, data: { Team, loading } }) => ({
    isShowing: ownProps.isShowing,
    team: Team,
    loading,
  }),
})(PlayerList);
