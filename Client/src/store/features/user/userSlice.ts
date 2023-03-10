import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      username: "",
      userAvatar: "",
      userEmail: "",
    },
  },
  reducers: {
    updateUsers: (state, action) => {
      const { username, userAvatar, userEmail } = action.payload;
      state.userInfo = {
        username,
        userAvatar,
        userEmail,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUsers } = counterSlice.actions;

export default counterSlice.reducer;
