// @flow
import React from 'react';
import withData from '../libs/withData';
import OverlayEngine from '../components/OverlayEngine';

function Test() {
  return <OverlayEngine />;
}

export default withData(Test);
