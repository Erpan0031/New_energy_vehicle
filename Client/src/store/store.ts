import { configureStore } from "@reduxjs/toolkit";
import userSlice, { getUserInformation } from "@/store/slice/user.slice";
import counterSlice, { increment, incrementByAmount } from "@/store/slice/counter.slice"
const store = configureStore({
  reducer: {
    users: userSlice,
    counters: counterSlice,
  },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
