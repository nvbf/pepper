// @flow
import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import ScoreStore from '../stores/score';
import TeamStore from '../stores/team';
import Screen from '../components/Screen';

import { ManUnited, Bayern } from '../mocks/teams';

export default class Pepper extends React.Component {
  constructor(props: any) {
    super(props);
    this.scoreStore = new ScoreStore();
    this.homeTeamStore = new TeamStore(Bayern);
    this.awayTeamStore = new TeamStore(ManUnited);
  }

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
          scoreStore={this.scoreStore}
          homeTeamStore={this.homeTeamStore}
          awayTeamStore={this.awayTeamStore}
        >
          <Screen
            size="1080p"
            topLeft={{ id: 'Scoreboard', showLogos: true, showColors: true }}
            topMiddle={<div>lol</div>}
            topRight={<div>lal</div>}
            main={<div>lool</div>}
          />
        </Provider>
      </div>
    );
  }
}
