import { createSlice } from "@reduxjs/toolkit";
import { IProductsStore } from "../types/products.types";

const initialState: IProductsStore = {
  cachedCategories: [],
  cachedProducts: [],
  filteredCachedProducts: [],
  selectedCategory: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.cachedCategories = action.payload;
    },
    setProducts(state, action) {
      state.cachedProducts = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;

      // filter products based on selected category
      const filteredProducts =
        state.selectedCategory !== ""
          ? state.cachedProducts.filter(
              (p) =>
                p.category.toLocaleLowerCase() ===
                state.selectedCategory.toLocaleLowerCase(),
            )
          : state.cachedProducts;

      state.filteredCachedProducts = filteredProducts;
    },
  },
});

export const { setCategories, setProducts, setSelectedCategory } =
  productsSlice.actions;
export default productsSlice.reducer;
