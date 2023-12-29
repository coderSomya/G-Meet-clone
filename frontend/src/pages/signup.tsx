import { Button, Card, Form, Input, notification } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import Axios from '../utils/Axios'

const Signup:React.FC = () => {

interface AccountCreationData {
    name: string,
    email: string,
    password: string
}

interface AuthResult{
  result: boolean,
  token: string | null
}

  const handleUserSignup = async (values: any) => {
     try {
      const response = await Axios.post('/auth/signup',values)

      let result: AuthResult = response.data;

      if(result.result && result.token){
        localStorage.setItem('token', result.token);
        notification.success({
          message: "Created user successfully"
        })
        window.location.href = "/signin";
      }
      else{
        notification.error({
          message: "Account already exists"
        })
      }
     } catch (error) {
      console.log(error)
      notification.error({
        message: "there was an error signing up",
      })
     }
  }

  return (

    <div
    className='w-full h-screen bg-gray-100 flex justify-center items-center'
    >
        <Card className='w-full md:width-96'>
            <Title>Signup</Title>
            <Form 
            onFinish={handleUserSignup}
            layout='vertical'>
                <Form.Item
                 rules= {[{
                  required: true,
                  min:5,
                  max:12,
                  }]}
                name= {"name"}
                label={"Name"}>
              <Input/>
            </Form.Item>
            <Form.Item 
            name= {"email"}
            label={"Email"}
            rules= {[{
            required: true,
            min:5,
            max:12,
            pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            message: "invalid email"
            }]}
            >
              <Input/>
            </Form.Item>
            <Form.Item 
            name={"password"}
            label={"Password"}
        
            rules= {[{
              required: true,
              min:5, max:12,
              message: "password must be at least 5 characters"
              }]}
            >
              <Input type="password"/>
              
            </Form.Item>
            <div className='flex justify-end mt-3'>
              <Button type="primary" size="large" htmlType='submit' >Submit</Button>
              </div>
            </Form>
        </Card>
    </div>
  )
}

export default Signup