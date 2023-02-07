import React, { lazy } from "react"
import { Navigate } from 'react-router-dom'

import Layout from "../components/Layout"

const Login = lazy(() => import("../pages/Login"))
const NotFound = lazy(() => import('../pages/NotFound'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Departments = lazy(() => import('../pages/Departments'))
const Employees = lazy(() => import('../pages/Employees'))
const Settings = lazy(() => import('../pages/Settings'))
const Permissions = lazy(() => import('../pages/Permissions'))
const SocialSecuritys = lazy(() => import('../pages/SocialSecuritys'))
const Attendances = lazy(() => import('../pages/Attendances'))
const Salarys = lazy(() => import('../pages/Salarys'))
const Approvals = lazy(() => import('../pages/Approvals'))
const LeavaApprovals = lazy(() => import('../pages/Approvals/cpns/LeaveApprovals'))
const Charts = lazy(() => import('../pages/Charts'))


const lazyCpnt = (cpnt: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      {cpnt}
    </React.Suspense>
  )
}

interface Router {
  name?: string
  path: string
  children?: Array<Router>
  element: any
}

const routes: Array<Router> = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/dashboard' />
      },
      {
        path: 'dashboard',
        element: lazyCpnt(<Dashboard />)
      },
      {
        path: 'departments',
        element: lazyCpnt(<Departments />)
      },
      {
        path: 'employees',
        element: lazyCpnt(<Employees />)
      },
      {
        path: 'settings',
        element: lazyCpnt(<Settings />)
      },
      {
        path: 'permissions',
        element: lazyCpnt(<Permissions />)
      },
      {
        path: 'social-securitys',
        element: lazyCpnt(<SocialSecuritys />)
      },
      {
        path: 'attendances',
        element: lazyCpnt(<Attendances />)
      },
      {
        path: 'salarys',
        element: lazyCpnt(<Salarys />)
      },
      {
        path: 'approvals',
        element: lazyCpnt(<Approvals />),
      },
      {
        path: 'leavaApprovals/:processId?',
        element: lazyCpnt(<LeavaApprovals />)
      },
      {
        path: 'charts',
        element: lazyCpnt(<Charts />)
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes