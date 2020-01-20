import React from 'react';

import { Tooltip as AntTooltip } from 'antd';

const withTooltip = Component =>
  React.forwardRef(
    ({ children, tooltipPlacement, tooltipTitle, tooltipTrigger, ...otherProps }, ref) => (
      <AntTooltip placement={tooltipPlacement} title={tooltipTitle} trigger={tooltipTrigger}>
        <Component ref={ref} {...otherProps}>
          {children}
        </Component>
      </AntTooltip>
    ),
  );

AntTooltip.defaultProps = {
  placement: 'topLeft',
  trigger: 'hover',
};

export default withTooltip;
