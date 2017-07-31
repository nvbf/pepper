// @flow
import React from 'react';
import withData from '../libs/withData';
import Screen from '../components/Screen';

function Playerlist() {
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
        screenId="cj5jb9cz9jrzu0110lpdq9cf4"
      />
    </div>
  );
}

export default withData(Playerlist);
