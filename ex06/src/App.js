import { Provider, useDispatch, useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./App.css";

// dispatch 호출 시 작동될 reducer 함수
function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

// reducer 함수로 상태관리하는 store 생성
const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        {/* Provider 으로 하위 컴포넌트에 값 전달준비 */}
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  // useSelector 으로 store 이 들고 있는 상태값 가져오기
  const number = useSelector((state) => {
    return state.number;
  });
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
};
const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
};
const Right3 = () => {
  // useDispatch 로 store 의 dispatch 가져오기
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3: </h1>
      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
