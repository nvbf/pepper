// @flow
import React from 'react';
import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import withData from '../libs/withData';
import Screen from '../components/Screen';

import { Bayern } from '../mocks/teams';

class Playerlist extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Pepper Playerlist</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Screen
          size="1080p"
          topLeft={{
            position: 'topLeft',
            isShowing: true,
            componentName: 'Scoreboard',
            showLogos: true,
            showColors: true,
          }}
        />
        <DevTools />
      </div>
    );
  }
}

export default withData(Playerlist);
