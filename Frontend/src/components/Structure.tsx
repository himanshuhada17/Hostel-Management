import { Card, Menu, MenuProps, Layout, Row, Col, Tooltip, Button } from "antd";
import React, { useState } from "react";
import {
  BlockOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  SettingTwoTone,
  UserOutlined,
} from "@ant-design/icons";

const Structure: React.FC = () => {
  //states
  const [current, setCurrent] = useState("dashboard");

  const items: MenuProps["items"] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <BlockOutlined />,
    },
    { type: "divider" },
    {
      label: "Rooms",
      key: "room",
      icon: <HomeOutlined />,
    },
    {
      label: "Beds",
      key: "bed",
      icon: <UserOutlined />,
    },
    {
      label: "Rents",
      key: "rent",
      icon: <MoneyCollectOutlined />,
    },
    {
      label: "Tenants",
      key: "tenant",
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: "setting",
      icon: <SettingOutlined />,
    },
  ];
  return (
    <>
      <Row>
        <Col span={3}>
          <Menu
            style={{ width: 170, height: "100vh" }}
            mode="vertical"
            selectedKeys={[current]}
            items={items}
          />
        </Col>
        <Col span={21}>
          <Row>
            <Col span={24}>
              <Card className="w-auto mt-1 mr-1">
                <div className="flex justify-end items-center h-3">
                  <Tooltip title="search">
                    <Button shape="circle" icon={<SettingTwoTone />} />
                  </Tooltip>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Structure;
