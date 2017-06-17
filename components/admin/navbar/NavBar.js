import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  width: 800px;
  height: 43px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContent = styled.div``;

const RightContent = styled.div``;

const Logo = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 43px;
`;

const Anchor = styled.a`
  cursor: pointer;
  font-size: 18px;
  line-height: 43px;
  padding: ${props => (props.noRightPadding ? '0 0 0 16px' : '0 16px')};
  &:hover { color: #777; }
`;

function NavBar() {
  return (
    <Container>
      <LeftContent>
        <Logo>Pepper</Logo>
      </LeftContent>
      <RightContent>
        <Link><Anchor>Lag og Spillere</Anchor></Link>
        <Link><Anchor>Score</Anchor></Link>
        <Link><Anchor>Oppstilling</Anchor></Link>
        <Link><Anchor>Statistikk</Anchor></Link>
        <Link noRightPadding><Anchor>Intervju</Anchor></Link>
      </RightContent>
    </Container>
  );
}

export default NavBar;
