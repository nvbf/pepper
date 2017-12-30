import { gql, graphql } from 'react-apollo';
import PlayerList from './NewPlayerList';

const ROSTER_QUERY = gql`
  query GetRoster($matchId: String!) {
    liveData(matchId: $matchId) {
      homeTeam {
        name
        logo
      }
      guestTeam {
        name
        logo
      }
    }
    roster(matchId: $matchId) {
      homeTeamPlayers {
        isCaptain
        isLibero
        player {
          id
          number
          position
          firstName
          lastName
          birthDate
        }
      }
      guestTeamPlayers {
        isCaptain
        isLibero
        player {
          id
          number
          position
          firstName
          lastName
          birthDate
        }
      }
    }
  }
`;

export default graphql(ROSTER_QUERY, {
  options: props => ({
    variables: { matchId: props.matchId },
  }),
  props: ({ ownProps, data }) => ({
    isShowing: ownProps.isShowing,
    players:
      data.roster && ownProps.showHomeTeam
        ? data.roster.homeTeamPlayers
        : data.roster.guestTeamPlayers,
    team: data.liveData && ownProps.showHomeTeam ? data.liveData.homeTeam : data.liveData.guestTeam,
    loading: data.loading,
  }),
})(PlayerList);
