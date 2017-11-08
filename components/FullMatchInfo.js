import React from 'react';
import { gql, graphql } from 'react-apollo';

const FETCH_FULL_MATCH_INFO_QUERY = gql`
  query getFullMatchInfo($matchId: Int!) {
    getFullMatchInfo(matchId: $matchId) {
        matchID
        matchStatus
        matchDatetime
        homeTeamID
        guestTeamID
        homeTeamName
        guestTeamName
        setWonHomeTeam
        setWonGuestTeam
        set1scoreHomeTeam
        set1scoreGuestTeam
        set2scoreHomeTeam
        set2scoreGuestTeam
        set3scoreHomeTeam
        set3scoreGuestTeam
        set4scoreHomeTeam
        set4scoreGuestTeam
        set5scoreHomeTeam
        set5scoreGuestTeam
        goldenSetscoreHomeTeam
        goldenSetscoreGuestTeam
        goldenSetPlayed
        set1Duration
        set2Duration
        set3Duration
        set4Duration
        set5Duration
        goldenSetDuration
        timeOutSet1HomeTeam
        timeOutSet1GuestTeam
        timeOutSet2HomeTeam
        timeOutSet2GuestTeam
        timeOutSet3HomeTeam
        timeOutSet3GuestTeam
        timeOutSet4HomeTeam
        timeOutSet4GuestTeam
        timeOutSet5HomeTeam
        timeOutSet5GuestTeam
        timeOutGoldenSetHomeTeam
        timeOutGoldenSetGuestTeam
        currentSet
        currentSetScoreHomeTeam
        currentSetScoreGuestTeam
        listOfPlayerStatisticsHomeTeam
        listOfPlayerStatisticsGuestTeam
        currentRotation
        startingSix
    }
  }
`;

const FullMatchInfo = props =>  (
  <ul>
    {Object.keys(props).map(prop => <li key={prop}>{prop}: {props[prop]}</li>)}
  </ul>
);

const config = {
  options: props => {
    return {
      variables: { matchId: 1111 },
    };
  },
  props: (info) => {
    const { ownProps, data: { getFullMatchInfo: { matchID, matchStatus }, loading, error } } = info;
    console.log(info)
    return ({
      loading,
      matchID,
      matchStatus,
      error,
    });
  },
};

// export default FullMatchInfo;
export default graphql(FETCH_FULL_MATCH_INFO_QUERY, config)(FullMatchInfo);
