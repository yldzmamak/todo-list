import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ConstIcon from '../../constants/IconType';

import { Row, Col, Table, Tooltip, Divider, Dropdown, Menu } from 'antd';
import SaveToDoModal from '../AddToDo/components/SaveToDoModal';

import { sortParamsWithId } from '../../utils/utils';

const List = ({ screenProps }) => {
  const [isVisibleSaveToDoModal, setIsVisibleSaveToDoModal] = useState(false);
  const [willUpdateItem, setWillUpdateItem] = useState(false);

  const {
    title,
    getItemsFromStore,
    dropDownItems,
    moveToFirstComponent,
    moveToSecondComponent,
    dispatchAddItemToStore,
  } = screenProps;

  const data = useSelector(getItemsFromStore).sort(sortParamsWithId);
  const dispatch = useDispatch();

  const moveToInFirstComponent = item => {
    dispatch(moveToFirstComponent.dispatchAddItemToStore(item));
    dispatch(moveToFirstComponent.dispatchDeleteItemToStore(item));
  };

  const moveToInSecondComponent = item => {
    dispatch(moveToSecondComponent.dispatchAddItemToStore(item));
    dispatch(moveToSecondComponent.dispatchDeleteItemToStore(item));
  };

  const deleteItem = item => {
    dispatch(moveToFirstComponent.dispatchDeleteItemToStore(item));
  };

  const columns = [
    {
      title: title,
      key: 'text',
      dataIndex: 'text',
      ellipsis: true,
      render: data => <span>{data}</span>,
    },
    {
      title: '',
      dataIndex: 'operation',
      align: 'center',
      width: 100,
      render: (_text, record) => {
        return (
          <>
            <Dropdown
              trigger="click"
              overlay={
                <Menu>
                  <Menu.Item>
                    <a onClick={() => moveToInFirstComponent(record)}>
                      {ConstIcon.arrowIcon} {dropDownItems[0]}
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a onClick={() => moveToInSecondComponent(record)}>
                      {ConstIcon.doubleArrowIcon} {dropDownItems[1]}
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
          dispatchAddItemToStore={dispatchAddItemToStore}
        />
        <Table
          size="small"
          className="gx-table-responsive"
          columns={columns}
          dataSource={data ? data : []}
          pagination={{ hideOnSinglePage: true }}
          style={{ width: '100%' }}
        ></Table>
      </Col>
    </Row>
  );
};

export default List;
