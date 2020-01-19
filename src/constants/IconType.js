import React from 'react';
import { Icon } from 'antd';

const editIcon = (
  <span className="gx-link" style={{ color: 'green' }}>
    <Icon type="edit" theme="filled" />
  </span>
);
const deleteIcon = (
  <span className="gx-link" style={{ color: '#ff4d4f' }}>
    <Icon type="delete" />
  </span>
);
const arrowIcon = (
  <span className="gx-link" style={{ color: 'blue' }}>
    <Icon type="arrow-right" />
  </span>
);
const doubleArrowIcon = (
  <span className="gx-link" style={{ color: 'blue' }}>
    <Icon type="double-right" />
  </span>
);
const downIcon = (
  <span className="gx-link" style={{ color: 'purple' }}>
    <Icon type="down" />
  </span>
);
export default {
  editIcon,
  deleteIcon,
  arrowIcon,
  downIcon,
  doubleArrowIcon,
};
