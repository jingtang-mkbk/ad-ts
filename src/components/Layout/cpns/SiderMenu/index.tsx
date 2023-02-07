import React from "react"
import {
  ApartmentOutlined,
  PieChartOutlined,
  SettingOutlined,
  TeamOutlined,
  IdcardOutlined,
  PayCircleOutlined,
  InsuranceOutlined,
  ProfileOutlined,
  BarChartOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/dashboard', <PieChartOutlined />),
  getItem('组织架构', '/departments', <ApartmentOutlined />),
  getItem('员工', '/employees', <TeamOutlined />),
  getItem('公司设置', '/settings', <SettingOutlined />),
  getItem('权限设置', '/permissions', <SettingOutlined />),
  getItem('社保', '/social-securitys', <InsuranceOutlined />),
  getItem('考勤', '/attendances', <ProfileOutlined />),
  getItem('工资', '/salarys', <PayCircleOutlined />),
  getItem('审批', '/approvals', <IdcardOutlined />),
  getItem('图表', '/charts', <BarChartOutlined />),
]

const SiderMenu: React.FC = () => {
  const navigateTo = useNavigate()

  const handlerClick = (e: {key: string}) => {
    navigateTo(e.key)
  }

  return (
    <Menu defaultSelectedKeys={[window.location.pathname]} mode="inline" items={items} onClick={handlerClick}/>
  )
}

export default SiderMenu