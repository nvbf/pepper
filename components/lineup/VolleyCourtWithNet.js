import React from 'react';
import styled from 'styled-components';
import VolleyCourt from './VolleyCourt';
import VolleyNet from './VolleyNet';

const Container = styled.div`
  width: 800px;
  height: 600px;
`;

function VolleyCourtWithNet(props) {
  return (
    <Container>
      <VolleyCourt height={props.height} width={props.width} />
    </Container>
  );
}

export default VolleyCourtWithNet;
