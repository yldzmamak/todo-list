import React from 'react';
import { Layout } from 'antd';

import logo from '../../logo.png';

const { Header: AntHeader } = Layout;

const Header = ({ ...otherProps }) => {
  return (
    <AntHeader className="App-header" {...otherProps}>
      <img
        src="https://kafein.fra1.digitaloceanspaces.com/kafein-web/kafein_logo.png"
        className="App-logo"
        alt="logo"
      />
    </AntHeader>
  );
};

export default Header;
