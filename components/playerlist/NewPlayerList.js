import styled from 'styled-components';

const SquadContainer = styled.div`
  width: 780px;
  min-height: 100px;
  margin: auto;
  margin-top: 150px;
`;

/* Header Start */

const SquadHeaderContainer = styled.div`
  height: 86px;
  width: 100%;
  background-color: #222b38;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const SquadLogo = styled.img`
  position: absolute;
  left: 16px;
  top: 11px;
  height: 64px;
  width: 64px;
  margin-left: 16px;
`;

const SquadHeaderName = styled.div`
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

const SquadPlayer = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  border-bottom: 1px solid #b0b6be;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }
`;

const SquadPlayerNumber = styled.div`
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

const SquadPlayerName = styled.div`
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

    return (
      <SquadContainer>
        <SquadHeaderContainer>
          <SquadLogo src={this.props.team.logo} />
          <SquadHeaderName>{this.props.team.name}</SquadHeaderName>
        </SquadHeaderContainer>
        <SquadContentContainer>
          {this.props.players.map(player => (
            <SquadPlayer>
              <SquadPlayerNumber>{player.player.number}</SquadPlayerNumber>
              <SquadPlayerName>
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
