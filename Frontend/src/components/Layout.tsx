import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Avatar, Button, Layout, Menu } from 'antd'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

const { Sider, Content, Header } = Layout

interface LayoutProps {
  children: ReactNode
}

export default function CustomLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link href="/rooms">Room</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link href="/rents">Rent</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link href="/bookHostel">Book Hostel</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            <Link href="/login">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background flex justify-between items-center px-4"
          style={{ padding: 0 }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white'
            }}
          />
          <span style={{ color: 'white', fontSize: '20px' }}>Zhostel</span>
          <Avatar className="mr-4">
            <UserOutlined size={25} />
          </Avatar>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
