import React from 'react';

import { Button as AntButton } from 'antd';

const Button = ({ ...otherProps }) => {
  return <AntButton {...otherProps} />;
};

export default Button;
