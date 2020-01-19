import React from 'react';
import { Icon as AntIcon, Modal as AntModal, Tooltip as AntTooltip } from 'antd';

const Title = ({ info, infoTooltipPosition, position, title }) => (
  <React.Fragment>
    {info && (
      <AntTooltip placement={infoTooltipPosition} title={info} trigger={'hover'}>
        <span
          className="ant-modal-close-x"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'help',
          }}
        >
          <AntIcon type="question" style={{ color: 'rgba(0, 0, 0, 0.45)' }} />
        </span>
      </AntTooltip>
    )}

    <div style={{ textAlign: position }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
  </React.Fragment>
);

const Modal = ({
  bodyPosition,
  children,
  footer,
  info,
  infoTooltipPosition,
  isClosable,
  title,
  titlePosition,
  ...otherProps
}) => (
  <AntModal
    closable={isClosable}
    footer={footer}
    maskClosable={isClosable}
    title={
      typeof title === 'string' ? (
        <Title
          title={title}
          info={info}
          infoTooltipPosition={infoTooltipPosition}
          position={titlePosition}
        />
      ) : (
        title
      )
    }
    {...otherProps}
  >
    <div style={{ textAlign: bodyPosition }}>{children}</div>
  </AntModal>
);

Modal.defaultProps = {
  bodyPosition: 'center',
  footer: null,
  infoTooltipPosition: 'topLeft',
  isClosable: true,
  titlePosition: 'center',
};

export default Modal;
