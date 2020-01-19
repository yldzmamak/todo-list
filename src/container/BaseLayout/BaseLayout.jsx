import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Header } from '..';

const { Content, Footer } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Row type="flex" justify="center">
            <Col
              xs={24}
              lg={24}
              xl={23}
              style={{ textAlign: 'center', padding: 24, minHeight: 280 }}
            >
              {children}
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Copyright © 2019 Kafein Technology Solutions
        </Footer>
      </Layout>
    </>
  );
};
export default BaseLayout;
