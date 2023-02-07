import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined
} from '@ant-design/icons'
import { Layout } from 'antd'
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'
import SiderMenu from './cpns/SiderMenu'
import { profileData } from '../../api/user'
import { fetchUserData } from '../../store/features/user'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

const { Header, Footer, Sider } = Layout

const View: React.FC = () => {
  // 折叠
  const [collapsed, setCollapsed] = useState(false)

  // redux hooks
  const dispatch = useAppDispatch()

  const userData = useAppSelector(state => state.user.userData)

  
  // 获取user数据到redux
  useEffect(()=>{
    profileData().then(({data})=>{
      dispatch(fetchUserData(data.userId))
    })
  }, [dispatch])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsed={collapsed}>
        <div className={styles.logo}>
          {
            !collapsed ? '后台管理系统' : <DesktopOutlined />
          }
        </div>
        <SiderMenu />
      </Sider>
      <Layout className={styles.site_layout}>
        <Header className={styles.site_layout_background} style={{ padding: 0 }}>
          <div className={styles.header}>
            <div className={styles.header_left}>
              {
                React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: "layout_trigger",
                  onClick: () => setCollapsed(!collapsed),
                })
              }
              <p>玛卡巴卡</p>
            </div>
            <div className={styles.header_right}>
              <img src={require('../../assets/common/head.jpg')} alt="" />
              <p>{userData.username}</p>
            </div>
          </div>
        </Header>
        <div style={{ padding: "12px", flex: 1 }}>
          <Outlet />
        </div>
        <Footer style={{ textAlign: 'center' }}>后台管理系统</Footer>
      </Layout>
    </Layout>
  )
}

export default View