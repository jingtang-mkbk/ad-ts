import { useEffect } from 'react'
import './App.css'
import routes from './router'
import { useRoutes, useNavigate } from 'react-router-dom'
import { getToken } from './utils/storage'
import { message } from 'antd'

function ToLogin() {
  const navigateTo = useNavigate()

  useEffect(() => {
    navigateTo('/login')
    message.warning("登录超时，请重新登录！")
  }, [navigateTo])

  return <></>
}

function ToCurrentPage() {
  const navigateTo = useNavigate()
  message.warning("您已经登陆过了！")

  useEffect(() => {
    navigateTo('/dashboard')
  }, [navigateTo])

  return <></>
}

function BeforeRouterEnter() {
  const element = useRoutes(routes)
  const token = getToken()
  

  if(window.location.pathname === "/login" && token){
    return <ToCurrentPage />
  }

  if(window.location.pathname !== "/login" && !token){
    return <ToLogin />
  }

  return element
}

export default function App() {

  return (
    <>
      <BeforeRouterEnter />
    </>
  )
}
