import React from 'react';
import { Layout } from 'antd';

import logo from '../../logo.png';

const { Header: AntHeader } = Layout;

const Header = ({ ...otherProps }) => {
  return (
    <AntHeader className="App-header" {...otherProps}>
      <img src={logo} className="App-logo" alt="logo" />
    </AntHeader>
  );
};

export default Header;
