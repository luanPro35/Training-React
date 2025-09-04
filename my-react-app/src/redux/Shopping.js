import { createSlice, configureStore } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shoppingCard",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
      state.totalQuantity += newItem.quantity;
    },

    removeItem: (state, action) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find((item) => item.id === idToRemove);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== idToRemove);
        } else {
          existingItem.quantity--;
        }
      }
    },
    incrementQuantity: (state, action) => {
      const idToIncrement = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === idToIncrement
      );

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const idToDecrement = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === idToDecrement
      );

      if (existingItem) {
        existingItem.quantity--;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

const store = configureStore({
  reducer: {
    shopping: shoppingSlice.reducer,
  },
});

export const shoppingActions = shoppingSlice.actions;

export default store;
