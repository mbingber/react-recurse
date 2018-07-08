import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Delay extends Component {
  static propTypes = {
    time: PropTypes.number,
  };

  static defaultProps = {
    time: 200,
  };

  state = { show: false };

  componentDidMount = () => {
    setTimeout(
      () => this.setState({ show: true }),
      this.props.time
    );
  }

  render = () => {
    if (!this.state.show) return null;
    return this.props.children;
  }
}
