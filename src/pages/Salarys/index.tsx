import React, { useEffect } from 'react'
import { Card, Button, Alert, Table } from 'antd'
import SalaryBox from './style'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchSalaryList } from '../../store/features/salary'

const { Column } = Table

const Salary: React.FC = () => {
  // redux hooks
  const dispatch = useAppDispatch()

  const { 
    rows, 
    // total
   } = useAppSelector(state => ({
    rows: state.salary.salaryData.rows,
    // total: state.salary.salaryData.total
  }))

  useEffect(()=>{
    dispatch(fetchSalaryList({page: 1, pageSize: 10, total: 0}))
  }, [dispatch])

  return (
    <>
      <SalaryBox>
        {/* top */}
        <Card style={{ width: "100%" }}>
          <div className="flx">
            <Alert message="本月0：入职 0 离职 0 调薪 0 未定薪 0" type="info" showIcon />
            <div>
              <Button type="primary" danger style={{marginRight: "10px"}}>设置</Button>
              <Button type="primary">报表</Button>
            </div>
          </div>
        </Card>
        {/* table */}
        <Card style={{marginTop: "20px"}}>
          <Table 
            dataSource={rows} 
            // pagination={{ hideOnSinglePage: true, total: total }}
          >
              <Column title="序号" dataIndex="dataIndex" />
              <Column title="姓名" dataIndex="username" />
              {/* <Column title="手机" dataIndex="mobile" key="mobileId"/>
              <Column title="工号" dataIndex="workNumber" />
              <Column title="聘用形式" dataIndex="formOfEmployment" key="formOfEmploymentId"/>
              <Column title="部门" dataIndex="departmentName" key="departmentNameId"/>
              <Column title="入职时间" dataIndex="timeOfEntry" key="timeOfEntryId"/>
              <Column title="工资基数" dataIndex="currentBasicSalary"  key="currentBasicSalaryId"/>
              <Column title="津贴方案" dataIndex="allowancePlan" key="allowancePlanId"/>
              <Column 
                title="操作" 
                dataIndex="id" 
                key="id" 
                render={()=><>
                  <Button type="primary" onClick={()=>console.log('调薪')}>调薪</Button>
                  <Button type="link" onClick={()=>console.log('查看')}>查看</Button>
                </>}
              /> */}
          </Table>
        </Card>
      </SalaryBox>
    </>
  )
}

export default Salary