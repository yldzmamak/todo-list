import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Col, Row } from 'antd';
import SaveToDoModal from './components/SaveToDoModal';

const AddToDo = () => {
  const [isVisibleSaveToDoModal, setIsVisibleSaveToDoModal] = useState(false);

  const onClick = () => {
    setIsVisibleSaveToDoModal(true);
  };
  return (
    <Row>
      <Col xl={12} xs={8} style={{ textAlign: 'center', padding: 24 }}>
        <Button type="primary" onClick={onClick}>
          YAPILACAK EKLE
        </Button>

        <SaveToDoModal isVisible={isVisibleSaveToDoModal} setVisible={setIsVisibleSaveToDoModal} />
      </Col>
    </Row>
  );
};

export default AddToDo;
