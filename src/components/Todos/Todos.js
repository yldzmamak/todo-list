import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ConstIcon from '../../constants/IconType';

import { Row, Col, Table, Tooltip, Divider, Dropdown, Menu } from 'antd';

import { inProgressAction, todosAction } from '../../redux/modules';
import SaveToDoModal from '../AddToDo/components/SaveToDoModal';

import { sortParamsWithId } from '../../utils/utils';

const Todos = () => {
  const [isVisibleSaveToDoModal, setIsVisibleSaveToDoModal] = useState(false);
  const [willUpdateItem, setWillUpdateItem] = useState(false);
  const todos = useSelector(({ todos }) => todos.todos).sort(sortParamsWithId);
  const dispatch = useDispatch();

  const moveToInProgress = inProgress => {
    dispatch(inProgressAction.addInProgress(inProgress));
    dispatch(todosAction.deleteTodo(inProgress));
  };

  const deleteItem = todo => {
    dispatch(todosAction.deleteTodo(todo));
  };

  const columns = [
    {
      title: 'Yapılacak',
      key: 'text',
      dataIndex: 'text',
      render: data => <span>{data}</span>,
    },
    {
      title: '',
      dataIndex: 'operation',
      align: 'center',
      width: 100,
      render: (text, record) => {
        return (
          <>
            <Dropdown
              trigger="click"
              overlay={
                <Menu>
                  <Menu.Item>
                    <a onClick={() => moveToInProgress(record)}>{ConstIcon.arrowIcon} Yapılıyor</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a onClick={() => moveToInProgress(record)}>
                      {ConstIcon.doubleArrowIcon} Yapıldı
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      onClick={() => {
                        setWillUpdateItem(record);
                        setIsVisibleSaveToDoModal(true);
                      }}
                    >
                      {ConstIcon.editIcon} Düzenle
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a className="ant-dropdown-link" href="#">
                {ConstIcon.downIcon}
              </a>
            </Dropdown>

            <Divider type="vertical" />

            <Tooltip title="Sil">
              <span onClick={() => deleteItem(record)}>{ConstIcon.deleteIcon}</span>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <Row>
      <Col>
        <SaveToDoModal
          isVisible={isVisibleSaveToDoModal}
          setVisible={setIsVisibleSaveToDoModal}
          willUpdateItem={willUpdateItem}
        />
        <Table
          size="small"
          className="gx-table-responsive"
          columns={columns}
          dataSource={todos ? todos : []}
          pagination={{ hideOnSinglePage: true }}
          style={{ width: '100%' }}
        ></Table>
      </Col>
    </Row>
  );
};

export default Todos;
