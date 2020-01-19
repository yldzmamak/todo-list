import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

// Components
import { Modal, Input, Button } from '../../../components';

import { Rules } from '../../../enums';
import { todosAction } from '../../../redux/modules';

const SaveToDoModal = props => {
  const {
    isVisible,
    setVisible,
    willUpdateItem,
    form: { getFieldDecorator },
  } = props;

  const dispatch = useDispatch();
  const { isLoading } = useSelector(store => store.todos);

  const handleSubmit = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let id;
        willUpdateItem ? (id = willUpdateItem.id) : (id = new Date().getTime());

        const todo = { id, text: values.todo };
        dispatch(todosAction.addTodo(todo));
        setVisible(false);
      }
    });
  };

  return (
    <Modal
      destroyOnClose
      isClosable={!isLoading}
      onCancel={() => setVisible(false)}
      title="Yapılacak Ekle"
      visible={isVisible}
      width={700}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('todo', {
            rules: [Rules.Required],
            validateTrigger: ['onBlur'],
            initialValue: willUpdateItem ? willUpdateItem.text : null,
          })(<Input placeholder="Yapılacak giriniz." tooltipTitle="Yapılacak giriniz." />)}
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            EKLE
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Form.create({ name: 'save_action' })(SaveToDoModal);
