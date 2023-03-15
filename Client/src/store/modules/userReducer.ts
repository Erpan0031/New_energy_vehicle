import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// 为 slice state 定义一个类型
interface CounterState {
  user: any;
}

// 使用该类型定义初始 state
const initialState: CounterState = {
  user: {},
};

export const counterSlice = createSlice({
  name: "user",
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    updateUsers: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUsers } = counterSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
