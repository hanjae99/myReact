import { legacy_createStore as createStore } from "redux";

const initState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 함수 정의
function increase() {
  return {
    type: INCREASE,
  };
}

function decrease() {
  return {
    type: DECREASE,
  };
}

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 만들기 (초기값 할당)
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const subscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello World!"));
store.dispatch(addToList({ id: 1, text: "wow" }));
