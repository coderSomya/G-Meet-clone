import { Button, Card, Form, Input } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

const Login:React.FC = () => {
  return (
    <div
    className='w-full h-screen bg-gray-100 flex justify-center items-center'
    >
        <Card className='w-full md:width-96'>
            <Title>Login</Title>
            <Form layout='vertical'>
            <Form.Item label={"Email"}>
              <Input/>
            </Form.Item>
            <Form.Item label={"Password"}>
              <Input/>
              <Button type="primary" size="large" htmlType='submit' className='cursor-pointer mt-3 '>Submit</Button>
            </Form.Item>
            </Form>
        </Card>
    </div>
  )
}

export default Login