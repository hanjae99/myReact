import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "./store";
import { up } from "./counterSlice";

// function reducer(state, action) {
//   switch (action.type) {
//     case "up":
//       return {
//         ...state,
//         value: state.value + action.step,
//       };
//     default:
//       return state;
//   }
// }

// const initState = { value: 0 };
// const store = createStore(reducer, initState);

function Counter() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
