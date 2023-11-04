import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchChangeCurrency } from './operations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    results: 0,
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled]: (state, action) => {
      state.baseCurrency = action.payload;
    },
    [fetchChangeCurrency.fulfilled]: (state, action) => {
      state.results = action.payload.result;
    },
  },
});
export const { setBaseCurrency } = currencySlice.actions;
