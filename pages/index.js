// @flow
import React from 'react';
import DevTools from 'mobx-react-devtools';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import ScoreStore from '../stores/score';
import TeamStore from '../stores/team';
import UiStore from '../stores/ui';
import Screen from '../components/Screen';

import { ManUnited, Bayern } from '../mocks/teams';

export default class Pepper extends React.Component {
  constructor(props: any) {
    super(props);
    this.uiStore = new UiStore();
    this.scoreStore = new ScoreStore();
    this.homeTeamStore = new TeamStore(Bayern);
    this.awayTeamStore = new TeamStore(ManUnited);
  }

  uiStore: any;
  scoreStore: any;
  homeTeamStore: any;
  awayTeamStore: any;

  render() {
    return (
      <div>
        <Head>
          <title>Pepper</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Provider
          uiStore={this.uiStore}
          scoreStore={this.scoreStore}
          homeTeamStore={this.homeTeamStore}
          awayTeamStore={this.awayTeamStore}
        >
          <Screen
            size="1080p"
            topLeft={this.uiStore.topLeft}
            topMiddle={this.uiStore.topMiddle}
            topRight={this.uiStore.topRight}
            main={this.uiStore.main}
          />
        </Provider>
        <DevTools />
      </div>
    );
  }
}
