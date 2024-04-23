import { Col, Row } from "antd";
import React from "react";
import Layout from "./Layout";

const Rooms = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21}>
          //your code goes here
          <div>Rooms</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Rooms;
