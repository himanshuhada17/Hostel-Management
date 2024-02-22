import React from "react";
import { Form, Input, Table, Typography } from "antd";
import Image from "next/image";
import Image1 from "../../public/Screenshot 2024-02-20 at 11.50.20 AM.png"
import { useGetAllUsersLazyQuery, useGetAllUsersQuery } from "@/generated/graphql";

const User = () => {
  const {data} = useGetAllUsersQuery()
  console.log(data?.getAllUsers.map((user) => {user.email}))
  return (
    <>
      <div className="bg-purple-600 bg-opacity-25 h-96 max-w-sm  p-4 m-5 rounded-2xl">
        testt
        <Typography>
          <Form>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            </Form>
        <Image
          width={200}
          src={Image1}
          alt="Profile Picture"
          />
          <h1>New File</h1>
          </Typography>
      </div>
    </>
  );
};

export default User;
