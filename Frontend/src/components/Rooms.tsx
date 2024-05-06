import { Button, Card, Col, Row } from "antd";
import React from "react";
import Layout from "./Layout";
import Search from "antd/es/input/Search";

const Rooms = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21} className="flex  justify-center">
          <div className="w-[90%]  p-3 rounded-lg bg-gray-100  mt-4 border-gray-300 border-[1px] flex justify-between items-center">
            <Search
              placeholder="Search Room"
              allowClear
              // enterButton="Search"
              size="large"
              className="w-[32%] bg-white"
            />

            <Button type="primary" size="large" className="bg-blue-500">
              Create Room
            </Button>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Rooms;
