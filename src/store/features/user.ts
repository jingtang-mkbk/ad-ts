import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userData, approvals, approvalsDetail, approvalsTimeline } from '../../api/user'
import { yyyymmdd } from '../../utils/timeStamp'

// 用户信息
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId: idType) => {
    const { data } = await userData(userId)
    return data
  }
)

// 审批
export const fetchApprovalsData = createAsyncThunk(
  "user/fetchApprovals",
  async (obj: PageType) => {
    const { data: { rows } } = await approvals(obj)
    const newData = rows.map((it: {
        procApplyTime: string
        processState: string
        dataIndex: number
        key: number
      }, index: number) => {
      it.procApplyTime = yyyymmdd(it.procApplyTime,'-')
      it.dataIndex = index + 1
      it.key = index
      switch (it.processState){
        case "1": it.processState="审批中"; return it
        case "2": it.processState="通过"; return it
        case "3": it.processState="不通过"; return it
        case "4": it.processState="撤销"; return it
        default: return it
      }
    })
    return newData
  }
)

// 审批流程详情
export const fetchProcessData = createAsyncThunk(
  "user/fetchProcessData",
  async (processId: idType) => {
    const { data } = await approvalsDetail(processId)
    data.procData = JSON.parse(data.procData)
    return data
  }
)

// 审批流程进度
export const fetchProcessTimeline = createAsyncThunk(
  "user/fetchProcessTimeline",
  async (processId: idType) => {
    const { data } = await approvalsTimeline(processId)
    return data
  }
)

interface processDataType {
  departmentId: string,
  departmentName:string,
  procApplyTime: number,
  procCurrNodeUserId: string,
  procCurrNodeUserName: string,
  procData: any,
  processId: string,
  processKey: string,
  processName: string,
  processState: string,
  timeOfEntry: number,
  userId: string,
  username: string 
}


interface UserState {
  userData: any,
  approvalsData: any[],
  processData: processDataType,
  processTimelineData: any[]
}
const initialState: UserState = {
  userData: {},
  approvalsData: [],
  processData: {
    departmentId: '',
    departmentName: '',
    procApplyTime: 0,
    procCurrNodeUserId: '',
    procCurrNodeUserName: '',
    procData: '',
    processId: '',
    processKey: '',
    processName: '',
    processState: '',
    timeOfEntry: 0,
    userId: '',
    username: ''
  },
  processTimelineData: []
};

// 创建一个 Slice 
const userSlice = createSlice({
  name: 'user',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 存userData
    // changeUserData: (state, action: PayloadAction<object>) => {
    //   state.userData = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload
    })
    .addCase(fetchApprovalsData.fulfilled, (state, action) => {
      state.approvalsData = action.payload
    })
    .addCase(fetchProcessData.fulfilled, (state, action) => {
      state.processData = action.payload
    })
    .addCase(fetchProcessTimeline.fulfilled, (state, action) => {
      state.processTimelineData = action.payload
    })
  },
});
// 导出加减的方法
// export const { changeUserData } = userSlice.actions;

// 默认导出
export default userSlice.reducer;

