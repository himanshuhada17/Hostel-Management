import { Button, Checkbox, Form, Input, Tabs, TabsProps } from 'antd'
import React from 'react'
import '../../public/2303.w015.n003.1224A.p30.1224-removebg-preview.png'

const LogIn = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: '#f3f4f6' }}
    >
      <div className="h-[600px] w-[900px] shadow-xl border-[1px] flex overflow-hidden rounded-xl bg-white fixed">
        <div className="w-1/2 h-96 flex justify-center mt-6">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: 'Login',
                key: '1',
                children: (
                  <>
                    <Form layout="vertical" className="mt-2">
                      <Form.Item
                        className="w-full"
                        rules={[
                          {
                            whitespace: true,
                            message: 'Please Enter Valid Email',
                            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
                          }
                        ]}
                      >
                        <Input
                          type="text"
                          placeholder="Email Address/Username"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: 'Please enter password'
                          }
                        ]}
                      >
                        <Input
                          type="password"
                          placeholder="Password"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                    </Form>
                    <div className="flex items-center justify-between">
                      <Checkbox>Remember me</Checkbox>
                      <Button
                        className="bg-blue-500 rounded-xl w-[110px]"
                        type="primary"
                        size={'large'}
                      >
                        Login
                      </Button>
                    </div>
                  </>
                )
              },
              {
                label: 'Sign Up',
                key: '2',
                children: (
                  <>
                    <Form layout="vertical" className="mt-2">
                      <Form.Item>
                        <Input
                          type="text"
                          placeholder="Name"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          type="text"
                          placeholder="Email"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          type="text"
                          placeholder="Username"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          type="password"
                          placeholder="Password"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                    </Form>
                    <div className="flex justify-end">
                      <Button
                        className="bg-blue-500 rounded-xl w-[110px]"
                        type="primary"
                        size={'large'}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </>
                )
              }
            ]}
            className="w-80 mt-14 h-full bg-white"
            size="large"
            centered
          />
        </div>
        <div className="w-1/2 h-full">
          <div className="h-1/2"></div>
          <div className="h-1/2">
            <img
              className=" mt-[80px] h-60 w-full"
              src="2303.w015.n003.1224A.p30.1224-removebg-preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
