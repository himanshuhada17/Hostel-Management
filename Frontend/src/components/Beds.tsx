import { Col, Row } from "antd";
import React from "react";
import Layout from "./Layout";

const Beds = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21}>
          <div>Beds</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Beds;
