// @flow
import React from 'react';
import { gql, graphql } from 'react-apollo';
import withData from '../libs/withData';
import Scoreboard from './scoreboard/ApolloScoreboard';
import PlayerList from './playerlist/ApolloPlayerList';

/* we need a component that can subscribe to overlay updates, and change the UI accordingly */

class OverlayEngine extends React.Component {
  componentDidMount() {
    this.props.subscribeToOverlays();
  }
  render() {
    if (this.props.loading) {
      return <div>loading</div>;
    }

    if (this.props.overlay.id === 'scoreboard') {
      return <Scoreboard isShowing={this.props.overlay.isShowing} matchId="123" />;
    }

    if (this.props.overlay.id === 'playerlist') {
      return <PlayerList showHomeTeam isShowing={this.props.overlay.isShowing} matchId="123" />;
    }

    return `Overlay:${this.props.data.Overlay.id}`;
  }
}

const GET_OVERLAY_QUERY = gql`
  {
    Overlay(id: "playerlist") {
      id
      isShowing
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
  props: ({ ownProps, data }) => {
    const overlay = data.Overlay;
    return {
      subscribeToOverlays: () => data.subscribeToMore({ document: OVERLAY_SUBSCRIPTION }),
      loading: data.loading,
      isShowing: ownProps.isShowing,
      overlay: data.Overlay,
    };
  },
};

export default graphql(GET_OVERLAY_QUERY, config)(OverlayEngine);
