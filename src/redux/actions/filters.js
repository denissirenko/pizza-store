export const setSortBy = (obj) => ({
  type: 'SET_SORT_BY',
  payload: obj,
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
