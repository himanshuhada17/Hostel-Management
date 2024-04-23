import React from "react";
import { Col, Form, Input, Row, Table, Typography } from "antd";
import Image from "next/image";
import Image1 from "../../public/Screenshot 2024-02-20 at 11.50.20 AM.png";
import {
  useGetAllUsersLazyQuery,
  useGetAllUsersQuery,
} from "@/generated/graphql";
import Layout from "./Layout";

const User = () => {
  return (
    <Layout>
      <Row>
        <Col span={3}></Col>
        <Col span={21}>
          <div>Users</div>
        </Col>
      </Row>
    </Layout>
  );
};

export default User;
