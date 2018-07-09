import React from 'react';
import Slider from './Slider';

const styles = {
  container: {
    padding: '50px',
    width: '100%',
  },
  separator: {
    paddingBottom: '30px',
  }
}

const Controls = ({
  numSquares,
  changeNumSquares,
  degreeOfChange,
  changeDegreeOfChange,
}) => {
  return (
    <div style={styles.container}>
      <Slider
        label="Number of squares"
        min={1}
        max={100}
        value={numSquares}
        onChange={changeNumSquares}
      />
      <div style={styles.separator} />
      <Slider
        label="Degree of change"
        min={1}
        max={100}
        value={degreeOfChange}
        onChange={changeDegreeOfChange}
      />
    </div>
  );
}

export default Controls;