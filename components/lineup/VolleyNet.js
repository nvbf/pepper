import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 200px;
  display: flex;
  flex-direction: row;
  padding-top: 100px;
`;

const Pole = styled.div`
  height: ${props => props.height}px;
  width: 10px;
  background: grey;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Net = styled.div`
  margin-top: ${props => props.heightPercent}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: transparent;
  position: relative;
  border-bottom: 8px solid white;
  border-top: 8px solid white;
`;

const Antenna = styled.div`
  position: absolute;
  left: ${props => (props.right ? '922' : '25')}px;
  height: 180px;
  width: 3px;
  top: -88px;
  background-color: grey;
`;

function VolleyNet(props) {
  const ratio = props.width / 900;
  const poleHeight = 250 * ratio;
  const heightPercent = props.netHeight / poleHeight;
  return (
    <Container>
      <Pole height={poleHeight} />
      <Net height={100 * ratio} heightPercent={heightPercent} width={props.width * 1.05}>
        {/*
          <Antenna />
        <Antenna right />
         */}
      </Net>
      <Pole height={250 * ratio} />
    </Container>
  );
}

export default VolleyNet;
