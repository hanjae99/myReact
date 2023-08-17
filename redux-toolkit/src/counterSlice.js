import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // console.log(action);
      state.value =
        state.value +
        action.payload; /* 자동으로 생성된 액션 함수를 이용한다면 payload 로 값이 전달됨 */
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
