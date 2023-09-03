// filter selectors
export const selectFilter = state => state.filter.filter;
export const selectCategoryId = state => state.filter.categoryId;
export const selectSortType = state => state.filter.sort;
export const selectPage = state => state.filter.page;
export const selectPageCount = state => state.filter.pageCount;

// pizzas selectors
export const selectPizzas = state => state.pizzas.items;
export const selectIsLoading = state => state.pizzas.isLoading;
export const selectError = state => state.pizzas.error;

// cart items
export const selectCartItems = state => state.cartItems.cartItems;
export const selectTotalPrice = state => state.cartItems.totalPrice;
export const selectTotalCount = state => state.cartItems.totalCount;
