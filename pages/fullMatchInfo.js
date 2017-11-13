import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import withData from '../libs/withData';
import FullMatchInfo from '../components/FullMatchInfo';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fafafa;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

function FullMatchInfoPage() {
  const matchId = 1111;
  return (
    <FullMatchInfo matchId={matchId} />
  );
}

export default withData(FullMatchInfoPage);
