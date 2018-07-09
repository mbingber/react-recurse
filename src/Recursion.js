import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Delay from './Delay';

export default class Recursion extends Component {
  static propTypes = {
    numSquares: PropTypes.number,
    index: PropTypes.number,
    sideLength: PropTypes.number,
  };

  static defaultProps = {
    index: 0,
    sideLength: 600,
  };

  get nextSideLength() {
    const { scale } = this.props;
    const ratio = Math.sqrt(2) / 2 * Math.sqrt(scale**2 - 2*scale + 2);
    return ratio * this.props.sideLength;
  }

  get rotationAngle() {
    const { index, scale } = this.props;
    return index > 0 ? Math.PI/4 - Math.atan(1 - scale) : 0;
  }

  get styles() {
    const { index, sideLength, numSquares } = this.props;

    const percent = Math.round((index / numSquares) * 100);
    const dim = `${Math.round(sideLength)}px`;
    const transform = `rotate(${this.rotationAngle * 180 / Math.PI}deg)`;

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `hsl(0, 0%, ${percent}%)`,
      height: dim,
      width: dim,
      transform,
    };
  }

  render = () => {
    const { index, numSquares, ...rest } = this.props;

    if (index > numSquares) return null;

    return (
      <div style={this.styles}>
        <Recursion
          {...rest}
          index={index+1}
          sideLength={this.nextSideLength}
          numSquares={numSquares}
        />
      </div>
    );
  }
}