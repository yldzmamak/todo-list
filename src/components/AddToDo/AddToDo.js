import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { Col, Row } from 'antd';
import SaveToDoModal from './components/SaveToDoModal';
import { todosAction } from '../../redux/modules';

const AddToDo = () => {
  const [isVisibleSaveToDoModal, setIsVisibleSaveToDoModal] = useState(false);

  const onClick = () => {
    setIsVisibleSaveToDoModal(true);
  };
  return (
    <Row style={{ justifyCcontent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
      <Col style={{ padding: 10 }}>
        <Button type="primary" onClick={onClick}>
          YAPILACAK EKLE
        </Button>
      </Col>
      <SaveToDoModal
        isVisible={isVisibleSaveToDoModal}
        setVisible={setIsVisibleSaveToDoModal}
        dispatchAddItemToStore={todo => todosAction.addTodo(todo)}
      />
    </Row>
  );
};

export default AddToDo;
