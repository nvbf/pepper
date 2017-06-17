// @flow
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import BigHeader from '../playerlist/BigHeader';
import VolleyCourt from './VolleyCourt';
import color from '../../libs/color';
import { ManUnited } from '../../mocks/teams';
import type { Player } from '../../types/types';

const Container = styled.div`
  width: 908px;
  height: 900px;
  position: relative;
`;

const BackgroundContainer = styled.div`
  background-color: ${darken(0.6, color.white)};
  background: linear-gradient(${darken(0.8, 'rgba(255, 255, 255, 0.7)')}, ${darken(
  0.6,
  'rgba(255, 255, 255, 0.7)',
)});
  height: 700px;
  width: 908px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 112px;
  left: 0;
  padding-top: 32px;
`;

const ForegroundContainer = styled.div`
  position: absolute;
  width: 908px;
  height: 700px;
  top: 112px;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const PlayerBox = styled.div`
  width: 580px;
  height: 485px;
  margin-bottom: 0px;
  position: relative;
`;

const PlayerContainer = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  height: 120px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
`;

const PlayerCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${color.yellow};
  background: linear-gradient(
    ${props => (props.libero ? color.white : color.yellow)},
    ${props => (props.libero ? color.lightGray : color.darkYellow)}
  );
  color: ${color.darkBlue};
  text-align: center;
  line-height: 50px;
  font-size: 30px;
`;

const PlayerName = styled.div`
  margin-top: 8px;
  text-transform: uppercase;
  color: ${color.white};
  font-size: 18px;
`;

function PlayerThing(props: { x: number, y: number, player: Player, libero?: boolean }) {
  return (
    <PlayerContainer left={props.x} top={props.y}>
      <PlayerCircle libero={props.libero}>{props.player.number}</PlayerCircle>
      <PlayerName>{props.player.name}</PlayerName>
    </PlayerContainer>
  );
}

PlayerThing.defaultProps = {
  libero: false,
};

function Players(props: {
  one: Player,
  two: Player,
  three: Player,
  four: Player,
  five: Player,
  six: Player,
  libero: Player,
}) {
  return (
    <PlayerBox>
      <PlayerThing player={props.one} x={480} y={170} />
      <PlayerThing player={props.two} x={430} y={20} />
      <PlayerThing player={props.three} x={240} y={20} />
      <PlayerThing player={props.four} x={50} y={20} />
      <PlayerThing player={props.five} x={0} y={170} />
      <PlayerThing player={props.six} x={240} y={170} />
      <PlayerThing player={props.libero} x={430} y={380} libero />
    </PlayerBox>
  );
}

function Lineup() {
  return (
    <Container>
      <BigHeader logo={ManUnited.logo} text={ManUnited.name} isShowing />
      <BackgroundContainer>
        <VolleyCourt height={550} width={850} />
      </BackgroundContainer>
      <ForegroundContainer>
        <Players
          one={ManUnited.players[0]}
          two={ManUnited.players[1]}
          three={ManUnited.players[2]}
          four={ManUnited.players[3]}
          five={ManUnited.players[4]}
          six={ManUnited.players[5]}
          libero={ManUnited.players[6]}
        />
      </ForegroundContainer>
    </Container>
  );
}

export default Lineup;
