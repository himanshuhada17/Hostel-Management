import { Col, Row, Table } from 'antd'
import Layout from '../components/Layout'

const Rents = () => {
  return (
    <Layout>
      <Row>
        <Col span={21}>
          <Table
            columns={[
              {
                title: 'Sr No.',
                key: 'key',
                dataIndex: 'key'
              },
              {
                title: 'Name',
                key: 'name',
                dataIndex: 'name'
              },
              {
                title: 'StudentID',
                key: 'sid',
                dataIndex: 'sid'
              }
            ]}
            dataSource={[
              {
                key: '1',
                name: 'Mike',
                sid: '123'
              },
              {
                key: '2',
                name: 'John',
                sid: '123444'
              }
            ]}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default Rents
