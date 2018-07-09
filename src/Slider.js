import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Tooltip from 'rc-tooltip';
import RCSlider from 'rc-slider';

const createSliderWithTooltip = RCSlider.createSliderWithTooltip;
const Range = createSliderWithTooltip(RCSlider.Range);
const Handle = RCSlider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const Slider = ({ label, ...props }) => (
  <div>
    {label && <p>{label}</p>}
    <RCSlider
      handle={handle}
      {...props}
    />
  </div>
);

export default Slider;
