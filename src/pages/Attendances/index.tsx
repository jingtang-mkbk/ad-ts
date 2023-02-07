import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchAttendanceList } from '../../store/features/attendance'
import { Card, Button, Alert, Table, Space, Badge } from 'antd'
import AttendanceBox from './style'
import { CloudUploadOutlined, AlertOutlined, SettingOutlined, SaveOutlined, TableOutlined } from '@ant-design/icons'

const { Column } = Table

const Attendance: React.FC = () => {
  // redux hooks
  const dispatch = useAppDispatch()

  const { attendanceList } = useAppSelector(state => ({
    attendanceList: state.attendance.attendanceList
  }))


  useEffect(()=>{
    dispatch(fetchAttendanceList({page:1, pagesize: 10}))
  }, [dispatch])

  return (
    <>
      <AttendanceBox>
        {/* top */}
        <Card style={{ width: "100%" }}>
          <div className="flx">
            <Alert message="有 0 条考勤审批尚未处理" type="info" showIcon />
            <Space>
              <Button type="primary" icon={<CloudUploadOutlined />}>导入</Button>
              <Badge dot={true}>
                <Button type="primary" icon={<AlertOutlined />} >提醒</Button>
              </Badge>
              <Button type="primary" icon={<SettingOutlined />}>设置</Button>
              <Button type="primary" icon={<SaveOutlined />}>归档</Button>
              <Button type="primary" icon={<TableOutlined />}>报表</Button>
            </Space>
          </div>
        </Card>
        {/* table */}
        <Card style={{marginTop: "20px"}}>
          <Table >
              <Column title="序号" dataIndex="dataIndex" />
              <Column title="姓名" dataIndex="username" />
              <Column title="工号" dataIndex="workNumber" />
              <Column title="部门" dataIndex="departmentName" />
              <Column title="手机" dataIndex="mobile" />
              <Column title="3/1" dataIndex="formOfEmployment" />
              <Column title="3/2" dataIndex="timeOfEntry" />
              <Column title="3/3" dataIndex="currentBasicSalary" />
              <Column title="3/4" dataIndex="allowancePlan" />
             
              <Column 
                title="操作" 
                dataIndex="workNumber" 
                key="workNumber" 
                render={()=><>
                  <Button type="primary" onClick={()=>console.log('调薪')}>调薪</Button>
                  <Button type="link" onClick={()=>console.log('查看')}>查看</Button>
                </>}
              />
          </Table>
        </Card>
      </AttendanceBox>
    </>
  )
}

export default Attendance