import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { salaryList } from '../../api/salary'

// 薪水列表
export const fetchSalaryList = createAsyncThunk(
  "salary/fetchSalaryList",
  async (obj: salaryType) => {
    const { data } = await salaryList(obj)
    data.rows.forEach((it:any, index: number) => {
      it.allowancePlan = '通用方案'
      it.dataIndex = index +1
      it.formOfEmployment = "未知"

      // it.mobileId = index + 888
      // it.formOfEmploymentId = index + 110
      // it.departmentNameId = index + 78
      // it.currentBasicSalaryId = index + 103
      // it.allowancePlanId = index + 10086
      // it.timeOfEntryId = index + 10010
    })
    return data
  }
)

interface SalaryState {
  salaryData: {
    rows: any[],
    total: number
  },
}

const initialState: SalaryState = {
  salaryData: {
    rows: [],
    total: 0
  }
}

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
    .addCase(fetchSalaryList.fulfilled, (state, action) => {
      state.salaryData = action.payload
    })
  }
})

export default salarySlice.reducer