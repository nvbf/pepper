// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ComponentFinder from './ComponentFinder';

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

export default function Screen(props: {
  size: '1080p' | '720p',
  topLeft: Function,
  topMiddle: Function,
  topRight: Function,
  main: Function,
  matchId: String,
}) {
  return (
    <ThemeProvider theme={theme(props.size)}>
      <Container>
        <TopRow>
          <TopLeftContainer>
            <ComponentFinder component={props.topLeft} matchId={props.matchId} />
          </TopLeftContainer>
          <TopMiddleContainer>
            <ComponentFinder component={props.topMiddle} matchId={props.matchId} />
          </TopMiddleContainer>
          <TopRightContainer>
            <ComponentFinder component={props.topRight} matchId={props.matchId} />
          </TopRightContainer>
        </TopRow>
        <MainContainer>
          <ComponentFinder component={props.main} matchId={props.matchId} />
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
}
