import React from 'react';
import styled from 'styled-components';
import { gql, graphql, compose } from 'react-apollo';
import { transparentize } from 'polished';
import color from '../../../libs/color';

const Button = styled.button`
  background-color: ${props => (props.active ? color.blue : color.seaBlue)};
  color: ${color.white};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  text-transform: uppercase;
  height: 32px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 6px ${transparentize(0.7, color.seaBlue)};
`;

function ShowButton(props: { isShowing: boolean, text: String, toggleShowing: Function }) {
  return (
    <Button onClick={props.toggleShowing} active={props.data.Overlay.isShowing}>
      {props.data.Overlay.isShowing ? 'Hide' : 'Show'} {props.text}
    </Button>
  );
}

const TOGGLE_SHOWING = gql`
  mutation ToggleShowing($overlayId: ID!, $isShowing: Boolean) {
    updateOverlay(id: $overlayId, isShowing: $isShowing) {
      id
      isShowing
    }
  }
`;

const SHOWING_QUERY = gql`
  query IsShowing($overlayId: ID!) {
    Overlay(id: $overlayId) {
      id
      isShowing
    }
  }
`;

const mutationOptions = {
  props: ({ mutate, ownProps }) => ({
    toggleShowing: () =>
      mutate({
        variables: { isShowing: !ownProps.data.Overlay.isShowing, overlayId: ownProps.overlayId },
        optimisticResponse: {
          __typename: 'Mutation',
          updateOverlay: {
            __typename: 'Overlay',
            id: ownProps.overlayId,
            isShowing: !ownProps.data.Overlay.isShowing,
          },
        },
      }),
  }),
};

const queryOptions = {
  options: props => ({ variables: { overlayId: props.overlayId } }),
};

export default compose(
  graphql(SHOWING_QUERY, queryOptions),
  graphql(TOGGLE_SHOWING, mutationOptions),
)(ShowButton);
