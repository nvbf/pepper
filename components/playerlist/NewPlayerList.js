import styled, { keyframes } from 'styled-components';

const SquadContainer = styled.div`
  width: 780px;
  min-height: 100px;
  margin: auto;
  margin-top: 150px;
`;

/* Header Start */

const fadeIn = keyframes`
  0% { opacity: 0; }
  66% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const GrowDown = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 100%;
  }
`;

const ShrinkUp = keyframes`
  0% { height: 100%; }
  66% { height: 100%; }
  100% { height: 0px; }
`;

const GrowRight = keyframes`
  from {
    width: 0%;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1
  }
`;

const ShrinkLeft = keyframes`
  0% { width: 100%; opacity: 1; }
  66% { width: 100%; opacity: 1; }
  100% { width: 0%; opacity: 0; }
`;

const GrowRightDiv = styled.div`
  width: ${props => (props.isShowing ? '100%' : '0%')};
  animation: ${props =>
    props.isShowing ? `${GrowRight} 0.3s linear` : `${ShrinkLeft} 0.6s linear`};
`;

const Container = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const GrowDownDiv = styled.div`
  height: ${props => (props.isShowing ? '100%' : '0px')};
  animation: ${props => (props.isShowing ? `${GrowDown} 0.3s linear` : `${ShrinkUp} 0.6s linear`)};
`;

const FadeInDiv = styled.div`
  opacity: ${props => (props.isShowing ? 1 : 0)};
  animation: ${props => (props.isShowing ? `${fadeIn} 0.5s linear` : `${fadeOut} 0.2s linear`)};
`;

const SquadHeaderContainer = GrowRightDiv.extend`
  height: 100%;
  background-color: #222b38;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const SquadLogo = FadeInDiv.withComponent('img').extend`
  position: absolute;
  left: 16px;
  top: 11px;
  height: 64px;
  width: 64px;
  margin-left: 16px;
`;

const SquadHeaderName = FadeInDiv.extend`
  flex-grow: 1;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

/* Header End */

/* Content Start */

const SquadContentContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const GrowPlayer = keyframes`
  from { height: 0px; }
  to { height: 48px; }
`;

const ShrinkPlayer = keyframes`
  0% { height: 48px; }
  50% { height: 48px; }
  100% { height: 0px; border-bottom: none; opacity: 0; }
`;

const SquadPlayer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-bottom: ${props => (props.isShowing ? '1px solid #b0b6be' : 'none')};
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  height: ${props => (props.isShowing ? '48px' : '0px')};
  animation: ${props =>
    props.isShowing ? `${GrowPlayer} 0.3s linear` : `${ShrinkPlayer} 0.6s linear`};

  &:last-child {
    border-bottom: none;
  }
`;

const SquadPlayerNumber = FadeInDiv.extend`
  height: 36px;
  width: 36px;
  background-color: #222b38;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin-left: 16px;
`;

const SquadPlayerName = FadeInDiv.extend`
  text-indent: 16px;
  font-size: 32px;
  color: #222b38;
  text-transform: uppercase;
  flex-grow: 1;
`;

const SquadPlayerPosition = styled.div`
    height: 100%;
    width: 270px;
    background-image:   url('${props =>
      props.isLibero ? '/graphics/pink-bar-270-48.svg' : '/graphics/blue-bar-270-48.svg'}');
    color: white;
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    line-height: 48px;
    font-weight: 400;
`;

/* Content End */

/* Animation related */
/*
.squad-header-container {
    opacity: 0;
    width: 0px;
}

.squad-player {
    height: 0px;
    opacity: 0;
} */

class PlayerList extends React.Component {
  render() {
    if (this.props.loading) {
      return null;
    }

    console.log(this.props);
    const isShowing = this.props.isShowing;

    return (
      <SquadContainer>
        <Container height={86} width={780}>
          <SquadHeaderContainer isShowing={this.props.isShowing}>
            <SquadLogo src={this.props.team.logo} isShowing={isShowing} />
            <SquadHeaderName isShowing={isShowing}>{this.props.team.name}</SquadHeaderName>
          </SquadHeaderContainer>
        </Container>
        <SquadContentContainer>
          {this.props.players.map(player => (
            <SquadPlayer isShowing={isShowing}>
              <SquadPlayerNumber isShowing={isShowing}>{player.player.number}</SquadPlayerNumber>
              <SquadPlayerName isShowing={isShowing}>
                {player.player.firstName} {player.player.lastName}
              </SquadPlayerName>
              <SquadPlayerPosition>{player.position}</SquadPlayerPosition>
            </SquadPlayer>
          ))}
        </SquadContentContainer>
      </SquadContainer>
    );
  }
}

export default PlayerList;
