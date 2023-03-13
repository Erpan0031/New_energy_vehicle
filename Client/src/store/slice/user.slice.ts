import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getUserInfor } from "@/api";

// 为 slice state 定义一个类型
type Iuser = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};
interface UserState {
  avatarUrl: any;
  name: string;
  email: string;
  user: Iuser;
  // 多个可能的状态枚举值
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// 使用该类型定义初始 state
const initialState: UserState = {
  user: {
    id: "",
    name: "",
    email: "",
    avatarUrl: "",
  },
  status: "idle",
  error: null,
  avatarUrl: undefined,
  name: "",
  email: ""
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await getUserInfor();
  return response.data;
});
export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInformation: (state, action: PayloadAction<UserState>) => {
      console.log(state, action);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload.data;
    });
  },
});

export const { getUserInformation } = counterSlice.actions;
export const selectCount = (state: RootState) => state.users;

export default counterSlice.reducer;

export const selectAllPosts = (state: UserState) => state;
