import counter from "./Counter";
import todos from "./Todos";
import { combineReducers } from "redux";

// 만들어둔 리듀서 함수 합치기
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
