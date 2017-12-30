import { gql, graphql } from 'react-apollo';
import Scoreboard from './Scoreboard';
import {
  getAwayTeamSets,
  getHomeTeamSets,
  getHomeTeamPoints,
  getAwayTeamPoints,
} from '../../libs/setUtils';

const FETCH_SCORE_QUERY = gql`
  query FetchScoreQuery($matchId: String!) {
    liveData(matchId: $matchId) {
      homeTeam {
        id
        shortName
      }
      homeTeamSets
      guestTeamSets
      currentSet
      currentHomeTeamPoints
      currentGuestTeamPoints
      guestTeam {
        id
        shortName
      }
    }
  }
`;

const OVERLAY_SUBSCRIPTION = gql`
  subscription SubscribeOnShowing {
    Overlay {
      type
      overlay {
        id
        isShowing
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
  props: ({ ownProps, data }) => {
    console.log(data);
    if (data.loading) {
      return {
        loading: true,
      };
    }
    const liveData = data.liveData;
    return {
      subscribeToSetData: () =>
        data.subscribeToMore({
          document: OVERLAY_SUBSCRIPTION,
          variables: {},
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              return prev;
            }
            // const newSet = subscriptionData.data.Set.node;
            // const allSetsButNew = prev.Match.sets.filter(set => set.setNumber !== newSet.setNumber);
            console.log(prev, subscriptionData);
            return prev;
            /* return {
              ...prev,
              Match: {
                ...prev.Match,
                sets: allSetsButNew.concat(newSet),
              },
            }; */
          },
        }),
      isShowing: ownProps.isShowing,
      showLogos: false,
      showColors: false,
      homeTeam: {
        name: liveData.homeTeam.shortName,
        logo: '',
        color: '',
        points: liveData.currentHomeTeamPoints,
        sets: liveData.homeTeamSets,
      },
      awayTeam: {
        name: liveData.guestTeam.shortName,
        logo: '',
        color: '',
        points: liveData.currentGuestTeamPoints,
        sets: liveData.guestTeamSets,
      },
    };
  },
};

export default graphql(FETCH_SCORE_QUERY, config)(Scoreboard);
