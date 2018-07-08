import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Delay from './Delay';

const MAX_AMOUNT = 50;
const SCALE = 0.1;

export default class Recursion extends Component {
  static propTypes = {
    index: PropTypes.number,
    sideLength: PropTypes.number,
  };

  static defaultProps = {
    index: 0,
    sideLength: 600,
  };

  get nextSideLength() {
    const ratio = Math.sqrt(2) / 2 * Math.sqrt(SCALE**2 - 2*SCALE + 2);
    return ratio * this.props.sideLength;
  }

  get rotationAngle() {
    return this.props.index > 0 ? Math.PI/4 - Math.atan(1 - SCALE) : 0;
  }

  get styles() {
    const { index, sideLength } = this.props;

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid black',
      height: `${sideLength}px`,
      width: `${sideLength}px`,
      transform: `rotate(${this.rotationAngle * 180 / Math.PI}deg)`,
    };
  }

  render = () => {
    const { index } = this.props;

    if (index > MAX_AMOUNT) return null;

    return (
      <div style={this.styles}>
        <Delay time={50}>
          <Recursion
            index={index+1}
            sideLength={this.nextSideLength}
          />
        </Delay>
      </div>
    );
  }
}