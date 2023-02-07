import React from 'react'
import styles from './index.module.scss'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from '../../api/user'
import { setToken, setTimeStamp } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [form] = Form.useForm() 
  const navigateTo = useNavigate()

  const onFinish = async (values: any) => {
    const  { data }  = await login(values)
    setToken(data)
    setTimeStamp()
    navigateTo('/dashboard')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <img src={require("../../assets/common/login-logo.png")} alt="" />
          <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="mobile"
              rules={[{ required: true, message: 'Please input your mobile!' }]}
            >
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Mobile" 
                size="large" 
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
                  Login
                </Button>
              )}
            </Form.Item>
          </Form>
          <div style={{ textAlign: "left", color: "#fff" }}>
            Username: 13800000002 Password: 123456
          </div>
        </div>
      </div>
    </>
  )
}

export default Login