import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    name: "이한재",
    age: 24,
  },
  reducers: {
    changeName: (state) => {
      state.name = "구상모";
    },
    increase: (state, action) => {
      state.age += action.payload;
    },
  },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      title: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count: 2,
    },
    {
      id: 1,
      title: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count: 1,
    },
    {
      id: 2,
      title: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count: 3,
    },
    {
      id: 3,
      title: "Flowey",
      imgUrl: "img/shoes4.jpg",
      count: 0,
    },
  ],
  reducers: {
    addCount: (state, action) => {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count++;
    },
    minusCount: (state, action) => {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("최소수량입니다.");
      }
    },
    deleteItem: (state, action) => {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num, 1);
    },
    addItem: (state, action) => {
      const num = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },
    sortName: (state, action) => {
      state.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
  },
});

const store = configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

export let { changeName, increase } = user.actions;
export let { addCount, minusCount, addItem, deleteItem, sortName } =
  cart.actions;

export default store;
