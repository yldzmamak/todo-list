import React from 'react';

import { Row, Col } from 'antd';
import { AddToDo, List } from '../../components';
import { homePageData } from './useGenerateList';

const Home = () => {
  return (
    <>
      <AddToDo />
      <Row>
        {homePageData.map(item => (
          <Col xs={24} md={8} style={{ padding: 10 }}>
            <List screenProps={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
