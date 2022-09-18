export const extraReducerStatus = {
  pending: state => {
    state.isLoading = true;
  },
  fulfilled: (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  rejected: (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  },
};

export const extraReducerUtils = thunk => {
  return {
    [thunk.pending]: extraReducerStatus.pending,
    [thunk.fulfilled]: extraReducerStatus.fulfilled,
    [thunk.rejected]: extraReducerStatus.rejected,
  };
};
