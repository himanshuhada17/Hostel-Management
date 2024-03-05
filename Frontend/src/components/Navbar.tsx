import {
  Card,
  Menu,
  MenuProps,
  Layout,
  Row,
  Col,
  Tooltip,
  Button,
  Input,
  Form,
  Avatar,
  Switch,
} from "antd";
import React, { useState } from "react";
import {
  BlockOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  SettingTwoTone,
  UserOutlined,
} from "@ant-design/icons";


const Navbar: React.FC = () => {
  //states
  const [current, setCurrent] = useState("dashboard");

  const items: MenuProps["items"] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <BlockOutlined />,
    },
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
        <Col span={2}>
          <Menu
          className="h-screen p-2 fixed w-[120px]"  
            // style={{
            //   width: "180",
            //   height: "100vh",
            //   paddingLeft: 5,
            //   paddingTop: 10,
            //   paddingRight: 5,
            //   borderColor: "white",
            // }}
            mode="vertical"
            theme="dark"
            selectedKeys={[current]}
            items={items}
          />
        </Col>
        <Col span={22}>
          <div className="flex justify-between items-center bg-white h-16  shadow-2xl shadow-slate-200">
            <div className="ml-4 hover:scale-110 transform transition duration-300 ease-in-out">
              <span className="font-light tracking-wide">Z O S T E L S</span>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Type to Search"
                className="p-2 w-full"
              />
            </div>
            <div className="mr-4">
              <Switch className="mr-3 bg-slate-400" checkedChildren="LIGHT" unCheckedChildren="DARK" />
              <Avatar
                style={{ backgroundColor: "orange", verticalAlign: "middle" }}
                size="large"
              >
                H
              </Avatar>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
