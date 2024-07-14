import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProps } from '../data/Proudct';

export interface ProduitState {
  counter: number;
  priceTotal: number;
  products: { product: ProductProps; quantity: number }[];
}

const initialState: ProduitState = {
  counter: 0,
  priceTotal: 0,
  products: [],
};

const produitSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addNewProduct: (
      state,
      action: PayloadAction<{ product: ProductProps; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p.product.id === product.id
      );
      if (existingProductIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[existingProductIndex].quantity += quantity;
      }
      state.counter += quantity;
      state.priceTotal += quantity * parseInt(product.priceAfter);
    },
    removeProduct: (state, action: PayloadAction<{ productId: number }>) => {
      const productIndex = state.products.findIndex(
        (p) => p.product.id === action.payload.productId
      );
      if (productIndex !== -1) {
        const productToRemove = state.products[productIndex];
        state.counter -= productToRemove.quantity;
        state.priceTotal -=
          productToRemove.quantity *
          parseInt(productToRemove.product.priceAfter);
        state.products.splice(productIndex ,1); 
      }
    },
  },
});

export const { addNewProduct ,removeProduct} = produitSlice.actions;
export default produitSlice.reducer;
