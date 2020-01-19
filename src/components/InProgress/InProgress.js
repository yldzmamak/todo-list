import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ConstIcon from '../../constants/IconType';

import { Row, Col, Popover, Table, Tooltip, Divider } from 'antd';

const InProgress = () => {
  const inProgress = useSelector(({ inProgress }) => inProgress.inProgress);

  const content = (
    <div>
      <a>Yapılacak</a> <br />
      <a>Yapıldı</a>
    </div>
  );

  const columns = [
    {
      title: 'Yapılıyor',
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
            <Tooltip title="Taşı">
              <Popover placement="rightTop" content={content} trigger="click">
                {ConstIcon.arrowIcon}
              </Popover>
            </Tooltip>

            <Divider type="vertical" />

            <Tooltip title="Düzenle">
              <span onClick={() => {}}>{ConstIcon.editIcon}</span>
            </Tooltip>

            <Divider type="vertical" />

            <Tooltip title="Sil">
              <span onClick={() => {}}>{ConstIcon.deleteIcon}</span>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <Row>
      <Col>
        <Table
          size="small"
          className="gx-table-responsive"
          columns={columns}
          dataSource={inProgress ? inProgress : []}
          pagination={{ hideOnSinglePage: true }}
          style={{ width: '100%' }}
        ></Table>
      </Col>
    </Row>
  );
};

export default InProgress;
