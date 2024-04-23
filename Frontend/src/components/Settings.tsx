import { Row, Col } from "antd";
import React from "react";
import Layout from "./Layout";

const Settings = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21}>
          <div>Settings</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Settings;
