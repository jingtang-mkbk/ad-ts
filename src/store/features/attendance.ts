import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { attendanceList } from '../../api/attendances'

// 考勤列表
export const fetchAttendanceList = createAsyncThunk(
  "attendance/fetchAttendanceList",
  async (obj: PageType) => {
    const {data:{data}} = await attendanceList(obj)
    return data
  } 
)

interface AttendanceState {
  attendanceList: any
}

const initialState: AttendanceState = {
  attendanceList: {}
}

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchAttendanceList.fulfilled, (state, action) => {
      state.attendanceList = action.payload
    })
  }
})

export default attendanceSlice.reducer
