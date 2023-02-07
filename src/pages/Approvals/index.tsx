import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Card, Button, Alert, Table } from 'antd'
import type { TableRowSelection } from 'antd/es/table/interface'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchApprovalsData } from '../../store/features/user'
import { useNavigate } from 'react-router-dom'

const { Column } = Table

interface DataType {
  key: React.Key
  processName: string
  username: string
  proCurrNodeUserName: string
  procApplyTime: string
  processState: string
  processId: string
}

const Approvals: React.FC = () => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  }

  // router hooks
  const navigate = useNavigate() 

  // redux hooks
  const dispatch = useAppDispatch()

  const approvalsData = useAppSelector( state => state.user.approvalsData )

  // 获取表格数据到redux
  useEffect(()=>{
    dispatch(fetchApprovalsData({ page: 1, pagesize: 10 }))
  }, [dispatch])

  // 点击查看跳转
  const detail = (processId: string) => {
    navigate(`/leavaApprovals/${processId}`)
  }

  return (
    <>
      <div className={styles.approvals}>
        {/* top */}
        <Card style={{ width: "100%" }}>
          <div className={styles.flx}>
            <Alert message="当前审批中 0 本月审批通过 1 本月审批驳回 0" type="info" showIcon />
            <Button type="primary">流程设置</Button>
          </div>
        </Card>
        {/* table */}
        <Card style={{marginTop: "20px"}}>
          <Table dataSource={approvalsData} rowSelection={rowSelection} pagination={{ hideOnSinglePage: true,  }}>
              <Column title="序号" dataIndex="dataIndex" />
              <Column title="审批类型" dataIndex="processName" />
              <Column title="申请人" dataIndex="username" />
              <Column title="当前审批人" dataIndex="procCurrNodeUserName" />
              <Column title="审批发起时间" dataIndex="procApplyTime" />
              <Column title="审批状态" dataIndex="processState" />
              <Column 
                title="操作" 
                dataIndex="processId" 
                key="processId" 
                render={
                  (processId: string)=>
                    <Button type="link" onClick={()=>detail(processId)} style={{padding: "4px 0"}}>查看</Button>
                }
              />
          </Table>
        </Card>
      </div>
    </>
  )
}

export default Approvals