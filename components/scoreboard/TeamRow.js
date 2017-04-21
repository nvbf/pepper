// @flow
import React from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';
import color from '../../libs/color';

const Row = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  flex-direction: row;
`;

const ImageLogo = styled.img`
  width: 34px;
  height: 34px;
`;

const ShirtColor = styled.div`
  border-radius: 3px;
  background-color: ${props => props.hex};
  width: 16px;
  height: 16px;
  margin-left: 8px;
  border: 1px solid #111;
`;

const Name = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  min-width: 100px;
  max-width: 170px;
  text-transform: uppercase;
  margin-left: 8px;
  height: 22px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${color.darkBlue};
  font-weight: 800;
`;

const AnimatedLogo = Animated.createAnimatedComponent(ImageLogo);
const AnimatedShirtColor = Animated.createAnimatedComponent(ShirtColor);

export type TeamRowProps = {
  color: string,
  logo: string,
  name: string,
  showColor: boolean,
  showLogo: boolean,
};

export type TeamRowState = {
  logoAnim: any,
  colorAnim: any,
};

class TeamRow extends React.Component {
  static defaultProps = {
    logo: '',
    name: '',
    color: '',
    showLogo: false,
    showColor: false,
  };

  constructor(props: TeamRowProps) {
    super(props);
    this.state = {
      logoAnim: new Animated.Value(1),
      colorAnim: new Animated.Value(1),
    };
  }

  state: TeamRowState;

  shouldComponentUpdate(nextProps: TeamRowProps) {
    return (
      this.props.color !== nextProps.color ||
      this.props.name !== nextProps.name ||
      this.props.showColor !== nextProps.showColor ||
      this.props.showLogo !== nextProps.showLogo
    );
  }

  componentWillUpdate(nextProps: TeamRowProps) {
    if (!nextProps.showColor) {
      Animated.spring(this.state.colorAnim, { toValue: 0 }).start();
    }
    if (!nextProps.showLogo) {
      Animated.spring(this.state.logoAnim, { toValue: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.showColor) {
      Animated.spring(this.state.colorAnim, { toValue: 1 }).start();
    }
    if (this.props.showLogo) {
      Animated.spring(this.state.logoAnim, { toValue: 1 }).start();
    }
  }

  props: TeamRowProps;

  render() {
    return (
      <Row>
        <AnimatedLogo
          style={{
            opacity: this.state.logoAnim,
            width: this.state.logoAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 33],
            }),
          }}
          src={this.props.logo}
          alt="Team Logo"
        />
        <AnimatedShirtColor
          style={{
            opacity: this.state.colorAnim,
            width: this.state.colorAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 16],
            }),
            marginLeft: this.state.colorAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 8],
            }),
          }}
          hex={this.props.color}
        />
        <Name>{this.props.name}</Name>
      </Row>
    );
  }
}

export default TeamRow;
