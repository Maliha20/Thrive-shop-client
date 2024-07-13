import { TCartItem, TInititalState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TInititalState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.itemQuantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; stockQuantity: number }>
    ) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              stockQuantity:
                item.stockQuantity - item.itemQuantity,
            }
          : item
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.itemQuantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.itemQuantity) {
        item.itemQuantity -= 1;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
