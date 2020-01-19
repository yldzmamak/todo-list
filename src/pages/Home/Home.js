import React from 'react';

import { Row, Col } from 'antd';
import { AddToDo, Todos, InProgress } from '../../components';

const Home = () => {
  return (
    <>
      <Row>
        <Col xl={12} xs={8}>
          <AddToDo />
        </Col>
      </Row>
      <Row>
        <Col xl={12} xs={8}>
          <Todos />
        </Col>
        <Col xl={12} xs={8}>
          <InProgress />
        </Col>
      </Row>
    </>
  );
};

export default Home;
