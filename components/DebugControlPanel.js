import React from 'react';
import { inject } from 'mobx-react';

class DebugControlPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h5>Scoreboard</h5>
          <button
            onClick={() => {
              this.props.store.topLeft.isShowing = !this.props.store.topLeft.isShowing;
            }}
          >
            Toggle visibility
          </button>
          <button
            onClick={() => {
              this.props.store.topLeft.showLogos = !this.props.store.topLeft.showLogos;
            }}
          >
            Toggle Logos
          </button>
          <button
            onClick={() => {
              this.props.store.topLeft.showColors = !this.props.store.topLeft.showColors;
            }}
          >
            Toggle Colors
          </button>
        </div>
        <div>
          <h5>PlayerList</h5>
          <button
            onClick={() => {
              this.props.store.main.isShowing = !this.props.store.main.isShowing;
            }}
          >
            Toggle visibility
          </button>
        </div>
      </div>
    );
  }
}

export default inject(stores => ({ store: stores.uiStore }))(DebugControlPanel);
