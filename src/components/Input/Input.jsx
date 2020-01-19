import React from 'react';

import { Input as AntInput } from 'antd';
import { withTooltip } from '../../hoc';

const Input = React.forwardRef(({ size, ...otherProps }, ref) => (
  <AntInput ref={ref} size={size} {...otherProps} />
));

Input.defaultProps = {
  size: 'default',
};

export default withTooltip(Input);
