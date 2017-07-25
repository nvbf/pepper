// @flow
import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';

const Container = styled.div`
  width: 100%;
  height: 24px;
  background-color:

   ${color.seaBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InnerContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: row;
`;

const ColumnHead = styled.span`
  margin-right: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${color.lightBlue};
  font-size: 14px;
  width: ${props => props.colWidth || 24}px;
`;

export default function TableSubHeader() {
  return (
    <Container>
      <InnerContainer>
        <ColumnHead colWidth={42}>Nr</ColumnHead>
        <ColumnHead colWidth={216}>Navn</ColumnHead>
        <ColumnHead colWidth={140}>Posisjon</ColumnHead>
      </InnerContainer>
      <InnerContainer>
        <ColumnHead colWidth={52}>R</ColumnHead>
        <ColumnHead colWidth={52}>BR</ColumnHead>
        <ColumnHead colWidth={52}>H</ColumnHead>
      </InnerContainer>
    </Container>
  );
}
