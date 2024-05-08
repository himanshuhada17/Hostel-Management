import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Modal, Select, Table, Tooltip } from 'antd'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

import { useCreateRoomMutation } from '@/generated/graphql'
import { FaEdit } from 'react-icons/fa'
import Layout from '../components/Layout'

const Rooms = () => {
  const [addRooms, setAddRooms] = useState(false)
  const [createRoom] = useCreateRoomMutation()
  return (
    <Layout>
      <div className="flex justify-end mb-4 items-center">
        <Button
          type="primary"
          className="bg-gray-500"
          icon={<PlusOutlined />}
          size={'middle'}
          onClick={() => {
            setAddRooms(true)
          }}
        >
          Add Rooms
        </Button>
      </div>
      <Card>
        <Table
          columns={[
            {
              title: 'Sr No.',
              key: 'key',
              dataIndex: 'key'
            },
            {
              title: 'Room No',
              key: 'roomno',
              dataIndex: 'roomno'
            },
            {
              title: 'Floor',
              key: 'floor',
              dataIndex: 'floor'
            },
            {
              title: 'Room Status',
              key: 'roomstatus',
              dataIndex: 'roomstatus'
            },
            {
              title: 'Actions',
              fixed: 'right',
              width: '70',
              dataIndex: 'id',
              render: (id: string, record: any) => (
                <>
                  <div className="flex gap-4">
                    <Tooltip title="Edit">
                      <FaEdit size={15} />
                    </Tooltip>
                    <Tooltip title="Delete">
                      <MdDelete size={15} />
                    </Tooltip>
                  </div>
                </>
              )
            }
          ]}
          dataSource={[
            {
              key: '1',
              roomno: '101',
              floor: '3',
              roomstatus: 'Available'
            },
            {
              key: '2',
              roomno: '102',
              floor: '1',
              roomstatus: 'Available'
            }
          ]}
        />
      </Card>
      <Modal
        title="Add New Room"
        open={addRooms}
        destroyOnClose={true}
        onCancel={() => setAddRooms(false)}
        // onOk={() => setAddRooms(false)}
        footer={null}
      >
        <div>
          <Form
            layout="vertical"
            onFinish={async values => {
              const { data } = await createRoom({
                variables: {
                  input: {
                    roomNumber: values.roomNumber,
                    floor: values.floor,
                    roomStatus: values.status
                  }
                }
              })
              console.log(data)
            }}
          >
            <Form.Item
              name="roomNumber"
              label="Room Number"
              rules={[{ required: true, message: 'Please enter room number' }]}
            >
              <Input placeholder="Enter Room Number" />
            </Form.Item>
            <Form.Item
              name="floor"
              label="Floor"
              rules={[{ required: true, message: 'Please choose floor' }]}
            >
              <Select placeholder="Choose Floor">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="status"
              label="Room Status"
              rules={[{ required: true, message: 'Please select room status' }]}
            >
              <Select placeholder="Select Status">
                <Select.Option value="available">Available</Select.Option>
                <Select.Option value="occupied">Occupied</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button className="bg-sky-600 text-white" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </Layout>
  )
}

export default Rooms
