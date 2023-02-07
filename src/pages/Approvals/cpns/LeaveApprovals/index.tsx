import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ApprovalBox from './style'
import { Card, Divider, Timeline } from 'antd'
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../../hooks/store'
import { fetchProcessData, fetchProcessTimeline } from '../../../../store/features/user'
import { yyyymmdd } from '../../../../utils/timeStamp'

const LeaveApproval: React.FC = () => {
  // 获取路由传过来的processId
  const{ processId } =  useParams()

  // state

  // redux hooks
  const dispatch = useAppDispatch()

  const { processData, processTimelineData } = useAppSelector(state => ({
    processData: state.user.processData,
    processTimelineData: state.user.processTimelineData
  }))

  // 获取数据到并存到store
  useEffect(()=>{
    dispatch(fetchProcessData(processId))
    dispatch(fetchProcessTimeline(processId))
  }, [dispatch, processId])

  return (
    <>
      <ApprovalBox>
        <Card style={{ width: "60%", marginRight: "12px" }}>
          <h2>申请请假</h2>
          <div className='userinfo'>
            <img src={require('../../../../assets/common/img.jpeg')} alt="" />
            <div className='userinfo_right'>
              <h5>孙财</h5>
              <p>部门：<span>{processData?.departmentName}</span></p>
              <p>入职时间：<span>{yyyymmdd(processData?.timeOfEntry, '-')}</span></p>
            </div>
          </div>
          <Divider />
          <ul className='detail'>
            <li><p>申请类型：<span>{processData?.procData.processName}</span></p></li>
            <li><p>请假类型：<span>{processData?.procData.holidayType==="1" ? "事假" : "不知道"}</span></p></li>
            <li><p>申请单位：<span>{processData?.procData.applyUnit}</span></p></li>
            <li><p>开始时间：<span>{processData?.procData.startTime}</span></p></li>
            <li><p>结束时间：<span>{processData?.procData.endTime}</span></p></li>
            <li><p>请假时长：<span>{processData?.procData.duration}</span></p></li>
            <li><p>申请事由：<span>{processData?.procData.reason}</span></p></li>
          </ul>
        </Card>
        <Card style={{ flex: 1 }}>
          <h2>审批记录</h2>
          <Divider />
          <Timeline>
            {
              processTimelineData.map((it, index) => {
                return <Timeline.Item 
                        color={it.handleOpinion!=="xxx" ? "green" : "red"} 
                        key={index}
                        dot={
                          it.handleOpinion==="通过" ? <CheckCircleOutlined /> :
                          it.handleOpinion==="xxx" ? <CloseCircleOutlined /> : <CheckCircleOutlined />
                        }
                      >
                        <div className='timeline'>
                          <h5>{ it.handleOpinion==="xxx"? "撤销" : it.handleOpinion }</h5>
                          <p>{yyyymmdd(it.handleTime, '-')}</p>
                        </div>
                      </Timeline.Item>
              })
            }
          </Timeline>
        </Card>
      </ApprovalBox>
    </>
  )
}

export default LeaveApproval

