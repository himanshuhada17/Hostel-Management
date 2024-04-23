import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <Row>
      <Col span={3}></Col>
      {/* <div>start here</div> */}
      <Col span={21} className="p-6">
        <Row gutter={14}>
          <Col span={10}>
            <Row gutter={16}>
              <Col span={12}>
                <div className="flex w-64 h-28 hover:shadow-xl rounded-lg border hover:scale-105 transform transitio duration-300 ease-in-out hover:bg-red-100">
                  <div className="w-36 h-full rounded-lg flex justify-center items-center bg-red-500 bg-opacity-55">
                  <UserOutlined className="text-4xl" />
                  </div>
                  <div className="w-full rounded-lg flex flex-col justify-center items-center">
                    <div>
                      <span className="text-xl">Total Tenants</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-lg text-gray-400">13</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
              <div className="flex w-64 h-28 hover:shadow-xl rounded-lg border hover:scale-105 transform transitio duration-300 ease-in-out hover:bg-green-100">
                  <div className="w-36 h-full rounded-lg flex justify-center items-center bg-green-500 bg-opacity-55">
                  <UserOutlined className="text-4xl" />
                  </div>
                  <div className="w-full rounded-lg flex flex-col justify-center items-center">
                    <div>
                      <span className="text-xl">Total Rooms</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-lg text-gray-400">13</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex w-64 h-28 mt-5 hover:shadow-xl rounded-lg border hover:scale-105 transform transitio duration-300 ease-in-out hover:bg-yellow-100">
                  <div className="w-36 h-full rounded-lg flex justify-center items-center bg-yellow-500 bg-opacity-55">
                  <UserOutlined className="text-4xl" />
                  </div>
                  <div className="w-full rounded-lg flex flex-col justify-center items-center">
                    <div>
                      <span className="text-xl">Total Beds</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-lg text-gray-400">13</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
              <div className="flex w-64 h-28 mt-5 hover:shadow-xl rounded-lg border hover:scale-105 transform transitio duration-300 ease-in-out hover:bg-blue-100">
                  <div className="w-36 h-full rounded-lg flex justify-center items-center bg-blue-500 bg-opacity-55">
                  <UserOutlined className="text-4xl" />
                  </div>
                  <div className="w-full rounded-lg flex flex-col justify-center items-center">
                    <div>
                      <span className="text-xl">Total Expenses</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-lg text-gray-400">13</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Card></Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
