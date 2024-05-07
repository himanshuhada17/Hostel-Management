import { Button, Checkbox, Form, Input, Tabs, TabsProps, message } from "antd";
import React, { useRef } from "react";
import  "../../public/2303.w015.n003.1224A.p30.1224-removebg-preview.png"
import { useCreateUserMutation, useLoginUserLazyQuery } from "@/generated/graphql";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const [login,{loading:loginLoading}]=useLoginUserLazyQuery()
  const [createUser,{loading:createUserLoading}]=useCreateUserMutation()
  const navigate = useRouter()
  const [formRef] =Form.useForm()
  const detailsRef= useRef(formRef)
  return (
    <div className="flex justify-center items-center h-screen"
    style={{backgroundColor: "#f3f4f6"}}
    >
      <div className="h-[600px] w-[900px] shadow-xl border-[1px] flex overflow-hidden rounded-xl bg-white fixed">
        <div className="w-1/2 h-96 flex justify-center mt-6">
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Login",
                key: "1",
                children: (
                  <>
                    <Form form={formRef} layout="vertical" className="mt-2"
                    onFinish={async(values)=>{
                      console.log('hrererrerer')
                      if(!values.email){
                        return alert('Email is Required')
                      }
                      if(!values.password){
                        return alert("password is required")
                      }
                      const {data}=await login({
                        variables:{
                          email:values.email,
                          password:values.password
                        }
                      })
                      if(data?.loginUser.includes('User Login Successfully')){
                       navigate.push('/dashboard') 
                      }
                    }}
                    >
                      <Form.Item
                      name={'email'}
                      id="email"
                        className="w-full"
                        rules={[
                          {
                            whitespace: true,
                            message: "Please Enter Valid Email",
                            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          placeholder="Email Address/Username"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item
                      name={'password'}
                      id="password"
                        rules={[
                          {
                            required: true,
                            message: "Please enter password",
                          },
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
                      loading={loginLoading}
                        className="bg-blue-500 rounded-xl w-[110px]"
                        type="primary"
                        size={"large"}
                        onClick={async(val)=>{
                          const values=formRef.getFieldsValue()
                          if(!values.email){
                            return alert('Email is Required')
                          }
                          if(!values.password){
                            return alert("password is required")
                          }
                          const {data}=await login({
                            variables:{
                              email:values.email,
                              password:values.password
                            }
                          })
                          if(data?.loginUser.includes('User Login Successfully')){
                           navigate.push('/dashboard') 
                          }
                        }}
                        htmlType="submit"
                      >
                        Login
                      </Button>
                    </div>
                  </>
                ),
              },
              {
                label: "Sign Up",
                key: "2",
                children: (
                  <>
                    <Form ref={detailsRef} layout="vertical" className="mt-2"
                    >
                      <Form.Item
                      name={'name'}
                      id="name"
                      >
                        <Input
                          type="text"
                          placeholder="Name"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item
                        name={'email'}
                        id="email"
                      >
                        <Input
                          type="text"
                          placeholder="Email"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item
                      
                      name={'userName'}
                      id="userName">
                        <Input
                          type="text"
                          placeholder="Username"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                      <Form.Item
                        name={'password'}
                        id="password"
                      >
                        <Input
                          type="password"
                          placeholder="Password"
                          className="p-3 rounded-xl"
                        />
                      </Form.Item>
                    </Form>
                    <div className="flex justify-end">
                      <Button
                      onClick={async()=>{
                        const values=detailsRef.current.getFieldsValue()
                        console.log({values})
                        await createUser({
                          variables:{
                            input:{
                              name:values.name,
                              email:values.email,
                              password:values.password,
                              username:values.userName
                            }
                          }
                        })
                        navigate.push('/dashboard')
                      }}
                      loading={createUserLoading}
                        className="bg-blue-500 rounded-xl w-[110px]"
                        type="primary"
                        size={"large"}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </>
                ),
              },
            ]}
            className="w-80 mt-14 h-full bg-white"
            size="large"
            centered
          />
        </div>
        <div className="w-1/2 h-full">
          <div className="h-1/2"></div>
          <div className="h-1/2">
            <img className=" mt-[80px] h-60 w-full" src="2303.w015.n003.1224A.p30.1224-removebg-preview.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
