// import {
//   useCreateUserMutation,
//   useDeleteUserMutation,
//   useGetAllUsersQuery,
// } from "@/generated/graphql";
// import { EditOutlined, FundViewOutlined } from "@ant-design/icons";
// import { Avatar, Button, Col, Form, Input, Modal, Row } from "antd";
// import React, { useState } from "react";

// const Practice = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [viewMode, setViewMode] = useState(false);
//   const [editMode, setEditMode] = useState();
//   const [selectedUser,setSelecteduser] = useState(null)
//   const [form] = Form.useForm();
  // const [createUser, { loading: createLoading }] = useCreateUserMutation();
//   const [deleteUser, { loading: deleteUserLoading }] = useDeleteUserMutation();
//   //   const [data,] = useGetAllUsersQuery()
//   const { data, refetch: allUsersRefetch } = useGetAllUsersQuery();

//   const handleSubmit = async (values: any) => {
//     try {
//       const values = await form.validateFields();
//       await createUser({
//         variables: {
//           input: {
//             name: values.name,
//             email: values.email,
//             username: values.username,
//             password: values.password,
//           },
//         },
//       });
//       form.resetFields();
//       setIsModelOpen(false);
//       allUsersRefetch();
//       console.log("userCreated");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const handleDelete = async (userId: any) => {
//     try {
//       await deleteUser({
//         variables: {
//           deleteUserId: userId,
//         },
//       });
//       allUsersRefetch();
//       console.log("deleted successfully");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const handleView = (user: any) => {
//     setSelecteduser(user)
//     setIsModelOpen(true)
//     setViewMode(true)
//   }
//   return (
//     <Row>
//       <Col span={6}></Col>
//       <Col span={17}>
//         <Button
//           type="primary"
//           className="mt-4 bg-orange-300"
//           onClick={() => setIsModelOpen(true)}
//         >
//           Open Modal
//         </Button>
//         {data?.getAllUsers.map((user) => (
//           <div className="flex items-center space-x-4 w-80 h-[150px] mt-2 bg-slate-300 p-3 rounded-xl">
//             <Avatar className="size-16">
//               <span className="text-3xl">
//                 {user.name.slice(0, 1).toUpperCase()}
//               </span>
//             </Avatar>
//             <div>
//               <div className="text-xl">{user.username}</div>
//               <div className="text-xl">{user.email}</div>
//             </div>
//             <div className="flex flex-col justify-center space-y-2">
//               <Button
//                 type="dashed"
//                 className="bg-blue-300"
//                 icon={<FundViewOutlined />}
//                 onClick={() => handleView(user)}
//               >
//                 View
//               </Button>
//               <Button
//                 type="dashed"
//                 className="bg-blue-300"
//                 icon={<EditOutlined />}
//               >
//                 Edit
//               </Button>
//               <Button
//                 type="dashed"
//                 className="bg-blue-300"
//                 onClick={() => handleDelete(user.id)}
//               >
//                 DELETE
//               </Button>
//             </div>
//           </div>
//         ))}
//       </Col>
//       <Modal
//         visible={isModelOpen}
//         title="Details"
//         onCancel={() => {
//           setIsModelOpen(false), form.resetFields();
//         }}
//         footer={[
//           <Button key="submit" onClick={handleSubmit} loading={createLoading}>
//             Submit
//           </Button>,
//           <Button
//             key="cancel"
//             onClick={() => {
//               setIsModelOpen(false), form.resetFields();
//             }}
//           >
//             Cancel
//           </Button>,
//         ]}
//       >
//         <Form layout="vertical" form={form} initialValues={selectedUser ? selectedUser : undefined}>
//           <Form.Item label="Name" required name="name" >
//             <Input type="text" placeholder="Enter your name" disabled={viewMode} />
//           </Form.Item>
//           <Form.Item label="Email" required name="email">
//             <Input type="text" placeholder="Enter your email" disabled={viewMode} />
//           </Form.Item>
//           <Form.Item label="Username" required name="username">
//             <Input type="text" placeholder="Enter your username" disabled={viewMode}/>
//           </Form.Item>
//           <Form.Item label="Password" required name="password">
//             <Input type="text" placeholder="Enter your password" disabled={viewMode}/>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </Row>
//   );
// };

// export default Practice;
import { Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'

const Practice = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 2000); // Change the delay time as per your requirement

    return () => clearTimeout(timer);
  }, []);

  return (
    <Row>
      <Col span={6}></Col>
      <Col span={17}>
        <div className={`h-14 w-48 bg-gray-400 ${showDiv ? 'opacity-100 transition-opacity duration-1000 ease-out' : 'opacity-0'}`}>heyy</div>
      </Col>
    </Row>
  )
}

export default Practice;
