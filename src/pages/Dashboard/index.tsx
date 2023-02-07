import { Card, Calendar  } from 'antd'
import React from 'react'
import styles from './index.module.scss'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar'
import type { Moment } from 'moment'
import { useAppSelector } from '../../hooks/store'

type Txt = { txt: string, key: number }

const processApplication: Txt[] = [
  { txt:'加班离职', key: 1 },
  { txt:'请假调休', key: 2 },
  { txt:'审批列表', key: 3 },
  { txt:'我的信息', key: 4 }
]

const quickStart: Txt[] = [
  { txt:'人事报告', key: 0 },
  { txt:'考勤查询', key: 1 },
  { txt:'考勤同级', key: 2 },
  { txt:'员工审核', key: 3 },
  { txt:'组织架构', key: 4 }
]

const Dashboard: React.FC = () => {
  // 设置日历
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  }

  // redux hooks
  const userData = useAppSelector(state => state.user.userData)

  return (
    <>
      <div className={styles.dashboard}>
        {/* 头像 */}
        <Card style={{ width: "100%" }}>
          <img src={require('../../assets/common/head.jpg')} alt="" />
          <div className={styles.topleft}>
            <h2>早安，{userData.username}，祝你开心每一天！</h2>
            <p>{userData.username} | {userData.companyName}-总裁办</p>
          </div>
        </Card>

        <div className={styles.content}>
          <div className={styles.left}>
            {/* 日历 */}
            <Card title="工作日历" bordered={false} style={{ width: "100%", marginBottom: 12 }}>
              <div className={styles.site_calendar_demo_card}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </Card>
            {/* 公告 */}
            <Card title="公告" bordered={false} style={{ width: "100%" }}>
              <ul>
                {
                  [0,1,2].map(it => {
                    return <li key={it}>
                            <img src={require('../../assets/common/img.jpeg')} alt="" />
                            <div className={styles.noticeright}>
                              <h5 className='sin-line'><span>张三</span>发布了飞洒飞洒发扫阿发发发撒飞洒飞洒平放假啊山坡飞机啊发发生发生发生发生发生撒泼积分就</h5>
                              <p className='sin-line'>2022-12-31 19：00：00</p>
                            </div>
                          </li>
                  })
                }
              </ul>
            </Card>
          </div>
          <div className={styles.right}>
            {
              ['流程申请', '快速开始/便捷导航'].map((it, index) => {
                return <Card style={{ width: "100%", marginBottom: 12 }} key={index}>
                          <h5><span>{it}</span></h5>
                          <ul>
                            {
                              [processApplication, quickStart][index].map(it => {
                                return <li key={it.key}>{it.txt}</li>
                              })
                            }
                          </ul>
                        </Card>
                        })
            }
            <Card style={{ width: "100%", height: 230 }}>
              <h5><span>帮助链接</span></h5>
              <div className={styles.link}>
                <div className={styles.linkbox}>
                  <div className={styles.link_pic}>
                    <div className={styles.bg_pic}></div>
                  </div>
                  <p>入门指南</p>
                </div>
                <div className={styles.linkbox}>
                  <div className={styles.link_pic}>
                    <div className={styles.bg_pic2}></div>
                  </div>
                  <p>在线帮助手册</p>
                </div>
                <div className={styles.linkbox}>
                  <div className={styles.link_pic}>
                    <div className={styles.bg_pic3}></div>
                  </div>
                  <p>联系技术支持</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard