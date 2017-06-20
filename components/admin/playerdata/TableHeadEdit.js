// @flow
import React from 'react';
import styled from 'styled-components';
import color from '../../../libs/color';

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${color.lightBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.input`
  margin-left: 16px;
  background-color: ${color.white};
  border-radius: 3px;
  border: 1px solid ${color.extraLightGrey};
  padding: 8px;
  font-size: 20px;
  color: ${color.seaBlue};
`;

const Logo = styled.img`
  height: 48px;
  margin-left: 16px;
`;

const Name = styled.h4`
  margin-left: 16px;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 200;
`;

export default function TableHeadEdit(props: { logo: string, name: string }) {
  return (
    <Container>
      <Logo src={props.logo} />
      <TextInput value={props.name} />
    </Container>
  );
}
