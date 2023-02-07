import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import salaryReducer from './features/salary'
import attendanceReducer from "./features/attendance";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    user: userReducer,
    salary: salaryReducer,
    attendance: attendanceReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
