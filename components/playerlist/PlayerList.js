import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BarList from './BarList';
import BigHeader from './BigHeader';
import PlayerImage from './PlayerImage';

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 908px;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Source Sans Pro', sans-serif;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-directon: row;
  align-items: space-between;
  justify-content: space-between;
`;

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      intervalId: 0,
      showImage: false,
      showList: false,
      showHeader: true,
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.startUpdate = this.startUpdate.bind(this);
  }

  componentDidMount() {
    this.stopUpdate();
    setTimeout(this.startUpdate, 600);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isShowing && nextProps.isShowing) {
      this.stopUpdate();
      setTimeout(this.startUpdate, 600);
    } else if (this.props.isShowing && !nextProps.isShowing) {
      this.stopUpdate();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  stopUpdate() {
    clearInterval(this.state.intervalId);
    this.setState({
      showImage: false,
      selectedIndex: -1,
    });
  }

  startUpdate() {
    clearInterval(this.state.intervalId);
    const intervalId = setInterval(this.updateSelected, 2000);
    this.setState({ intervalId, showList: true });
  }

  updateSelected() {
    const newIndex = this.state.selectedIndex + 1;
    if (newIndex === this.props.team.players.length) {
      this.stopUpdate();
    } else {
      this.setState({
        selectedIndex: newIndex,
        showImage: true,
      });
    }
  }

  render() {
    if (this.props.loading) {
      return null;
    }

    const selectedPlayer = this.props.team.players[Math.max(this.state.selectedIndex, 0)];
    const prevPlayer = this.props.team.players[Math.max(0, this.state.selectedIndex - 1)];

    const { team } = this.props;

    return (
      <OuterContainer>
        <Container>
          <BigHeader logo={team.logo} text={team.name} isShowing={this.props.isShowing} />
          <RowContainer>
            <BarList
              team={team}
              selectedIndex={this.state.selectedIndex}
              isShowing={this.props.isShowing}
            />
            <PlayerImage
              player={selectedPlayer}
              prevPlayer={prevPlayer}
              isShowing={this.props.isShowing && this.state.showImage}
            />
          </RowContainer>
        </Container>
      </OuterContainer>
    );
  }
}

PlayerList.propTypes = {
  loading: PropTypes.bool.isRequired,
  isShowing: PropTypes.bool.isRequired,
  team: PropTypes.shape({
    players: PropTypes.array,
  }).isRequired,
};

export default PlayerList;
