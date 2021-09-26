import React from 'react'
import { Input, Card, Button, Space, Typography } from 'antd';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';

export default function Profile() {

  const { Password } = Input
  const { Text } = Typography

  return (
    <div className="login-card">
      <Card
        className='card-login'
        title="Login" 
        style={{ 
          height: 300,
          width: 500 
        }}>
          <Space
            size='large'
            align='center'
            direction="vertical">
            <Input
              style={{ width: '450px' }}
              size="large"
              placeholder="email" 
              prefix={<UserOutlined />}
            />

            <Password
              style={{ width: '450px' }}
              size="large"
              placeholder="Password"
              prefix={ <LockOutlined />}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button
            className='login-btn'
              onClick={()=> console.log('login')} 
            >
              Login
            </Button>
            <Text>
              Don't have an account
            </Text>
          </Space>
      </Card>
    </div>
  )
}
