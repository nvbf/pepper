// flow
import React from 'react';
import { inject } from 'mobx-react';

export type DebugProps = {
  store: {
    toggle: Function,
  },
};

function DebugControlPanel(props: DebugProps) {
  return (
    <div>
      <div>
        <h5>Scoreboard</h5>
        <button onClick={props.store.toggle('topLeft', 'isShowing')}>
          Toggle visibility
        </button>
        <button onClick={props.store.toggle('topLeft', 'showLogos')}>
          Toggle Logos
        </button>
        <button onClick={props.store.toggle('topLeft', 'showColors')}>
          Toggle Colors
        </button>
      </div>
      <div>
        <h5>PlayerList</h5>
        <button onClick={props.store.toggle('main', 'isShowing')}>
          Toggle visibility
        </button>
      </div>
    </div>
  );
}

export default inject(stores => ({ store: stores.uiStore }))(DebugControlPanel);
