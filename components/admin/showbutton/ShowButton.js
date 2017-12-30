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

function ShowButton(props) {
  console.log(props);
  return (
    <Button
      onClick={props.data.Overlay.isShowing ? props.hideOverlay : props.showOverlay}
      active={props.data.Overlay.isShowing}
    >
      {props.data.Overlay.isShowing ? 'Hide' : 'Show'} {props.text}
    </Button>
  );
}

const SHOW_OVERLAY = gql`
  mutation showOverlay($id: ID!) {
    showOverlay(id: $id) {
      isShowing
      id
    }
  }
`;

const HIDE_OVERLAY = gql`
  mutation hideOverla($id: ID!) {
    hideOverlay(id: $id) {
      isShowing
      id
    }
  }
`;

const SHOWING_QUERY = gql`
  query IsShowing($id: ID!) {
    Overlay(id: $id) {
      id
      isShowing
    }
  }
`;

const showOverlayOptions = {
  props: ({ mutate, ownProps }) => ({
    showOverlay: () =>
      mutate({
        variables: { id: ownProps.id },
        optimisticResponse: {
          __typename: 'Mutation',
          showOverlay: {
            __typename: 'Overlay',
            id: ownProps.id,
            isShowing: true,
          },
        },
      }),
  }),
};

const hideOverlayOptions = {
  props: ({ mutate, ownProps }) => ({
    hideOverlay: () =>
      mutate({
        variables: { id: ownProps.id },
        optimisticResponse: {
          __typename: 'Mutation',
          hideOverlay: {
            __typename: 'Overlay',
            id: ownProps.id,
            isShowing: false,
          },
        },
      }),
  }),
};

const queryOptions = {
  options: props => ({ variables: { id: props.id } }),
};

export default compose(
  graphql(SHOWING_QUERY, queryOptions),
  graphql(HIDE_OVERLAY, hideOverlayOptions),
  graphql(SHOW_OVERLAY, showOverlayOptions),
)(ShowButton);
