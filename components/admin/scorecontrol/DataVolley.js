// @flow

import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { ApolloProvider } from 'react-apollo';

import FullMatchInfo from '../../FullMatchInfo';
import client from './../../../libs/initApollo';

export default class DataVolley extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1111, import: 1111 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ import: parseInt(this.state.value, 10) });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          Datavolley MatchId
          <input
            type="text"
            value={this.state.value}    
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleSubmit}>Import</button>
        <ApolloProvider client={client({})}>
          <FullMatchInfo matchId={this.state.import} />
        </ApolloProvider>
      </div>
    );
  }
}

DataVolley.propTypes = {
  value: PropTypes.number.isRequired
};
