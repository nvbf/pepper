import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
`;

const SetNumber = styled.div`
  width: 64px;
  text-align: center;
`;

const Score = styled.div`
  width: 120px;
  text-align: center;
`;

function SetRow(props: { setNumber: number, homeScore: number, awayScore: number }) {
  return (
    <Container>
      <SetNumber>
        {props.setNumber}
      </SetNumber>
      <Score>
        {props.homeScore}
      </Score>
      <Score>
        {props.awayScore}
      </Score>
    </Container>
  );
}

export default SetRow;
