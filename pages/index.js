// @flow
import React from 'react';
import withData from '../libs/withData';
import Screen from '../components/Screen';

class Playerlist extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    console.log('props:', this.props);
    return (
      <div>
        <Screen size="1080p" screenId={this.props.id} />
      </div>
    );
  }
}

export default withData(Playerlist);
