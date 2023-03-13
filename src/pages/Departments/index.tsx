import React from 'react'
import { Form, Button, Input, Select } from 'antd'
import { MinusCircleFilled, PlusOutlined } from '@ant-design/icons'
 
const Department: React.FC = () => {
  const [form] = Form.useForm()
  
  const submit = () => {
    form.validateFields().then(res => {
      console.log('res', res);
      
    })
  }

  return (
    <>
      <div>Form.List</div>
      <Button onClick={submit}>提交</Button>
      <Form form={form} labelCol={{span: 6}} wrapperCol={{span: 14}}>
        <Form.Item label="form.list">
          <Form.List name="callPlaceist">
            {
              (fields, {add, remove}) => {
                return (
                <>
                  <Form.Item noStyle shouldUpdate={(prev, current) => prev.callPlaceist !== current.callPlaceist}>
                    {
                      ({getFieldValue}) => {
                        const list = getFieldValue('callPlaceist')
                        console.log('list', list);
                        
                        return (
                          <div style={{marginBottom: '15px'}}>
                            <Button 
                              onClick={() => add({
                                type: 'call',
                                frequencyCount: null,
                                timePeriod: null,
                                timeUnit: null
                              })}
                              disabled={list?.filter((item: { type: string }) => item.type === 'call')?.length > 2}
                              icon={<PlusOutlined/>}
                              type="primary"
                              style={{ marginRight: '10px' }}
                              size="small"
                            >
                              添加呼叫限频
                            </Button>
                            <Button
                              onClick={() => add({
                                type: 'put',
                                frequencyCount: null,
                                timePeriod: null,
                                timeUnit: null
                              })}
                              disabled={list?.filter((item: { type: string }) => item.type === 'put')?.length > 2}
                              icon={<PlusOutlined/>}
                              type="primary"
                              style={{ marginRight: '10px' }}
                              size="small"
                            >
                              添加接通限频
                            </Button>
                          </div>
                        )
                      }
                    }
                  </Form.Item>
                  {
                    fields.map(({key, name}) => (
                      <div key={key} style={{ display: 'flex' }}>
                        <MinusCircleFilled 
                          style={{ fontSize: '20px', margin: '6px 10px 0 0' }}
                          onClick={()=>remove(name)}
                        />
                        <Form.Item
                          noStyle
                          shouldUpdate={(prev, cur) => prev.callPlaceist !== cur.callPlaceist}
                        >
                          {
                            ({getFieldValue}) => {
                              return (
                                <Form.Item
                                  label={getFieldValue('callPlaceist')[name].type === "call" ? '呼叫': '接通'}
                                  name={[name, 'frequencyCount']}
                                  rules={[{ required: true, message: '请输入' }]}
                                >
                                  <Input style={{ width: '70px' }}/>
                                </Form.Item>
                              )
                            }
                          }
                        </Form.Item>
                        <div style={{ margin: '5px 10px 0' }}>次/</div>
                        <Form.Item
                          style={{ marginRight: '10px' }}
                          name={[name, 'timePeriod']}
                          rules={[{ required: true, message: '请输入' }]}
                        >
                          <Input style={{ width: '70px' }}/>
                        </Form.Item>
                        <Form.Item
                          name={[name, 'timeUnit']}
                          rules={[{ required: true, message: '请输入' }]}
                        >
                          <Select allowClear style={{ width: '70px' }}>
                            <Select.Option value="分钟">分钟</Select.Option>
                            <Select.Option value="小时">小时</Select.Option>
                            <Select.Option value="天">天</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    ))
                  }
                </>)
              }
            }
          </Form.List>
        </Form.Item>
      </Form>
    </>
  )
}

export default Department