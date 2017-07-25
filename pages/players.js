// @flow
import React from 'react';
import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import withData from '../libs/withData';
import Screen from '../components/Screen';

class Playerlist extends React.Component {
  render() {
    return (
      <div>
        <Screen
          size="1080p"
          topLeft={{
            position: 'topLeft',
            isShowing: true,
            componentName: 'Scoreboard',
            showLogos: true,
            showColors: true,
          }}
          matchId="cj5jb3dhib2o101599yo4827f"
        />
        <DevTools />
      </div>
    );
  }
}

export default withData(Playerlist);
