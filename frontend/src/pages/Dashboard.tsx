import {  Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import React from 'react'

const Dashboard : React.FC = () => {
  return (
    <Layout>
        <Header>
<Menu
theme='dark'
mode='horizontal'
defaultOpenKeys={["home"]}
items={[
    {
        key: 'home',
        label: 'Home',
    },
    {
        key: 'profile',
        label: 'Profile',
    },


]}

/>
        </Header>
        <Layout className='h-[95vh]'>
            <Sider theme='light'> this is the sider area</Sider>
            <Content>
                this is the content area
            </Content>
        </Layout>
        </Layout>
  )
}

export default Dashboard