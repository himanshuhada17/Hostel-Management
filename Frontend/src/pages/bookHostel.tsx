import Layout from '@/components/Layout'
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd'

const BookHostel = () => {
  return (
    <Layout>
      <Card title="Hostel Booking">
        <Form layout="vertical">
          <Row gutter={10}>
            <Col span={8}>
              <Form.Item label="Room Number" name="roomNumber">
                <Select placeholder="Select Room Number">
                  <Select.Option value="1">101</Select.Option>
                  <Select.Option value="2">102</Select.Option>
                  <Select.Option value="3">103</Select.Option>
                  <Select.Option value="4">104</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Start Date">
                {/* <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select> */}
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Seater" name="seater">
                <Input placeholder="Enter Seater Number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Select Duration">
                <Select placeholder="Choose Duration">
                  <Select.Option value="1">1 Months</Select.Option>
                  <Select.Option value="2">2 Months</Select.Option>
                  <Select.Option value="3">3 Months</Select.Option>
                  <Select.Option value="4">4 Months</Select.Option>
                  <Select.Option value="5">5 Months</Select.Option>
                  <Select.Option value="6">6 Months</Select.Option>
                  <Select.Option value="7">7 Months</Select.Option>
                  <Select.Option value="8">8 Months</Select.Option>
                  <Select.Option value="9">9 Months</Select.Option>
                  <Select.Option value="10">10 Months</Select.Option>
                  <Select.Option value="11">11 Months</Select.Option>
                  <Select.Option value="12">12 Months</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Food Status">
                <Select placeholder="Select Status">
                  <Select.Option value="1">
                    Required *Additional 4000/-
                  </Select.Option>
                  <Select.Option value="2">Not Required</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Total Fees Per Month" name="seater">
                <Input placeholder="6000" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Total Fees Per Month" name="seater">
                <Input placeholder="6000" />
              </Form.Item>
            </Col>
          </Row>
          <Button>Book</Button>
        </Form>
      </Card>
    </Layout>
  )
}

export default BookHostel
