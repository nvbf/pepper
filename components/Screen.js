// @flow
import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { gql, graphql } from 'react-apollo';
import ComponentFinder from './ComponentFinder';

// eslint-disable-next-line
injectGlobal`
  font-family: 'Source Sans Pro', sans-serif;
`;

const theme = size => ({
  size: size || '1080p',
});

const Container = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 1920 : 1280)}px;
  height: ${props => (props.theme.size === '1080p' ? 1080 : 720)}px;
  background-image: url("https://i.ytimg.com/vi/CF9mQfLZfDg/maxresdefault.jpg");
`;

const TopRow = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 1920 : 1280)}px;
  height: ${props => (props.theme.size === '1080p' ? 180 : 120)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TopLeftContainer = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 638 : 426)}px;
  height: 100%;
  overflow: hidden;
`;

const TopMiddleContainer = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 638 : 426)}px;
  height: 100%;
  overflow: hidden;
`;

const TopRightContainer = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 638 : 426)}px;
  height: 100%;
  overflow: hidden;
`;

const MainContainer = styled.div`
  width: ${props => (props.theme.size === '1080p' ? 1920 : 1280)}px;
  height: ${props => (props.theme.size === '1080p' ? 900 : 600)}px;
  overflow: hidden;
`;

type Overlay = {
  componentName: String,
};

class ScreenPage extends React.Component {
  componentDidMount() {
    this.props.subscribeToOverlays();
  }

  props: {
    size: '1080p' | '720p',
    topLeft: Function,
    topMiddle: Function,
    topRight: Function,
    main: Function,
    loading: boolean,
    overlays: Array<Overlay>,
    matchId: String,
    subscribeToOverlays: Function,
  };

  render() {
    if (this.props.loading) {
      return null;
    }
    const topLeftOverlay = this.props.overlays.find(o => o.position === 'TOP_LEFT');
    const topCenterOverlay = this.props.overlays.find(o => o.position === 'TOP_CENTER');
    const topRightOverlay = this.props.overlays.find(o => o.position === 'TOP_RIGHT');
    const mainOverlay = this.props.overlays.find(o => o.position === 'MAIN');

    return (
      <ThemeProvider theme={theme(this.props.size)}>
        <Container>
          <TopRow>
            <TopLeftContainer>
              <ComponentFinder component={topLeftOverlay} matchId={this.props.matchId} />
            </TopLeftContainer>
            <TopMiddleContainer>
              <ComponentFinder component={topCenterOverlay} matchId={this.props.matchId} />
            </TopMiddleContainer>
            <TopRightContainer>
              <ComponentFinder component={topRightOverlay} matchId={this.props.matchId} />
            </TopRightContainer>
          </TopRow>
          <MainContainer>
            <ComponentFinder component={mainOverlay} matchId={this.props.matchId} />
          </MainContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

const FETCH_SCREEN_QUERY = gql`
  query FetchScreen($screenId: ID!) {
    Screen(id: $screenId) {
      overlays {
        componentName
        id
        position
        isShowing
      }
      match {
        id
      }
    }
  }
`;

const OVERLAY_SUBSCRIPTION = gql`
  subscription SubscribeOnOverlays($screenId: ID!) {
    Overlay(
      filter: { mutation_in: [CREATED, UPDATED, DELETED], node: { screen: { id: $screenId } } }
    ) {
      node {
        id
        componentName
        isShowing
        position
      }
    }
  }
`;

export default graphql(FETCH_SCREEN_QUERY, {
  options: props => ({
    variables: {
      screenId: props.screenId,
    },
  }),
  props: ({ ownProps, data: { Screen, subscribeToMore, loading } }) => ({
    subscribeToOverlays: () =>
      subscribeToMore({
        document: OVERLAY_SUBSCRIPTION,
        variables: {
          screenId: ownProps.screenId,
        },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
            return prev;
          }
          const newOverlay = subscriptionData.data.Overlay.node;
          const allOverlaysButNew = prev.Screen.overlays.filter(
            o => o.position !== newOverlay.position,
          );
          return {
            ...prev,
            Screen: {
              ...prev.Screen,
              sets: allOverlaysButNew.concat(newOverlay),
            },
          };
        },
      }),
    overlays: Screen.overlays,
    matchId: Screen.match.id,
    loading,
  }),
})(ScreenPage);
