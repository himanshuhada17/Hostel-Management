import { Row, Col } from "antd";
import React from "react";
import Layout from "./Layout";

const Rents = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21}>
          <div>Rents</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Rents;
